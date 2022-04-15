<script>
	import debounce from 'lodash/debounce.js';
	import Highlight from '$lib/highlight.svelte';
	import Paginator from '$lib/paginator.svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { browser } from '$app/env';
	import * as animateScroll from "svelte-scrollto";

	const pageSize = 20;
	const emptyMeta = { currentElements: 0, currentPage: 0, totalElements: 0, totalPages: 0, content: [] };

	let q = '';
	let broadcaster = '';
	let meta = emptyMeta;
	let foundBroadcaster = false;
	let loading = true;

	let possibleBroadcaster = [];

	onMount(async () => {
		q = localStorage.getItem('q') || '';
		broadcaster = localStorage.getItem('broadcaster') || '';
		//Load broadcaster
		const res = await fetch(import.meta.env.VITE_API_BASE_URL + '/broadcaster/autocomplete');
		const data = await res.json();
		possibleBroadcaster = data.map((name) => name.toLowerCase());
		checkBroadcaster();
		loadData(0);
	});

	async function loadData(pageNumber) {
		loading = true;
		if (foundBroadcaster) {
			if (browser) {
				localStorage.setItem('q', q);
				localStorage.setItem('broadcaster', broadcaster);
				if(typeof umami !== 'undefined') {
					umami.trackEvent('Get Highlights', 'load');
				}
			}
			var url = new URL(import.meta.env.VITE_API_BASE_URL + '/highlight/search');
			var params = { broadcaster: broadcaster, q: q, pageNumber, pageSize: pageSize };
			url.search = new URLSearchParams(params).toString();

			const res = await fetch(url);
			const data = await res.json();
			meta = data;
			animateScroll.scrollToTop();
			loading = false;
		} else {
			meta = emptyMeta;
			loading = false;
		}
	}

	function checkBroadcaster() {
		if (possibleBroadcaster.includes(broadcaster.toLowerCase())) {
			foundBroadcaster = true;
		} else {
			foundBroadcaster = false;
		}
	}

	const handleSearchInput = debounce((/** @type {{ target: { value: string; }; }} */ e) => {
		q = e.target.value;
		loadData(0);
	}, 200);

	const handleBroadcasterInput = debounce((/** @type {{ target: { value: string; }; }} */ e) => {
		broadcaster = e.target.value;
		checkBroadcaster();
		loadData(0);
	}, 100);
</script>

<svelte:head>
	<title>Highlight Suche</title>
</svelte:head>

<div class="flex justify-center w-full">
	<input
		type="search"
		class="w-1/6 max-w-xs rounded-l-lg bg-gray-50 border block flex-1 min-w-0 text-sm p-2.5  dark:bg-gray-700 dark:placeholder-gray-400 {foundBroadcaster
			? 'border-green-500 text-green-900 focus:ring-green-500 focus:border-green-500 dark:bg-green-100 dark:border-green-400'
			: 'border-red-500 text-red-900 focus:ring-red-500 focus:border-red-500 dark:bg-red-100 dark:border-red-400'}"
		placeholder="Broadcaster"
		value={broadcaster}
		on:input={handleBroadcasterInput}
		list="broadcaster-autocomplete"
	/>
	<datalist id="broadcaster-autocomplete">
		{#each possibleBroadcaster as broadcaster}
			<option>{broadcaster}</option>
		{/each}
	</datalist>
	<input
		type="search"
		class="w-9/12 max-w-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
		placeholder="Bonnie Green"
		value={q}
		on:input={handleSearchInput}
	/>
	<button
		type="button"
		class="inline-flex items-center px-3 rounded-r-md border-l-0 text-blue-700 hover:text-white border dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600 border-gray-300 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm  text-center dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800 umami--click--highlight-reload-button"
		on:click={loadData} aria-label="Reload highlight search">
			<svg xmlns="http://www.w3.org/2000/svg" class="inline h-5 w-5 {loading ? 'animate-spin' : ''}" viewBox="0 0 20 20" fill="currentColor">
				<path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
			</svg>
		</button
	>
</div>
<div class="flex flex-col flex-wrap content-center gap-2 pt-3 pb-3">
	{#each meta.content as highlight}
		<div class="max-w-3xl">
			<Highlight
				id={highlight.id}
				title={highlight.title}
				broadcasterName={highlight.broadcasterName}
				thumbnailUrl={highlight.thumbnailUrl}
				dateString={highlight.createdAt}
				views={highlight.viewCount}
				description={highlight.description}
				duration={highlight.duration}
			/>
		</div>
	{/each}
</div>

<Paginator page={meta.currentPage} pageSize={pageSize} totalElements={meta.totalElements} pageChange={(page) => loadData(page)}/>
