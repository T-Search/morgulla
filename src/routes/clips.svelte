<script>
	import Fa from 'svelte-fa';
	import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
	import { faRotate } from '@fortawesome/free-solid-svg-icons/faRotate';
	import debounce from 'lodash/debounce.js';
	import Clip from '$lib/clip.svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { browser } from '$app/env';
	import { baseApi } from '$lib/baseApi';

	const pageSize = 20;
	const emptyMeta = { currentElements: 0, currentPage: 0, totalElements: 0, totalPages: 0, content: [] };

	let q = '';
	let broadcaster = '';
	let meta = emptyMeta;
	let foundBroadcaster = false;
	let loading = true;
	let pageNumber = 0;

	let possibleBroadcaster = [];

	onMount(async () => {
		q = localStorage.getItem('q') || '';
		broadcaster = localStorage.getItem('broadcaster') || '';
		//Load broadcaster
		const res = await fetch(baseApi + '/broadcaster/all');
		const data = await res.json();
		possibleBroadcaster = data.map((name) => name.toLowerCase());
		checkBroadcaster();
		loadData();
	});

	async function loadData() {
		loading = true;
		if (foundBroadcaster) {
			if (browser) {
				localStorage.setItem('q', q);
				localStorage.setItem('broadcaster', broadcaster);
				if(typeof umami !== 'undefined') {
					umami.trackEvent('Get Clips', 'load');
				}
			}
			var url = new URL(baseApi + '/clip/search');
			var params = { broadcaster: broadcaster, q: q, pageNumber: pageNumber, pageSize: pageSize };
			url.search = new URLSearchParams(params).toString();

			const res = await fetch(url);
			const data = await res.json();
			meta = data;
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
		pageNumber = 0;
		loadData();
	}, 200);

	const handleBroadcasterInput = debounce((/** @type {{ target: { value: string; }; }} */ e) => {
		broadcaster = e.target.value;
		pageNumber = 0;
		checkBroadcaster();
		loadData();
	}, 100);

	function incrementPageNumber() {
		if (meta.totalPages - 1 > pageNumber) {
			pageNumber += 1;
			loadData();
		}
	}

	function decrementPageNumber() {
		if (0 < pageNumber) {
			pageNumber -= 1;
			loadData();
		}
	}
</script>

<svelte:head>
	<title>Clip Suche</title>
</svelte:head>

<div class="flex pt-3 justify-center w-full">
	<input
		type="search"
		class="w-1/6 max-w-xs rounded-l-lg bg-gray-50 border block flex-1 min-w-0 text-sm p-2.5  dark:bg-gray-700 dark:placeholder-gray-400 {foundBroadcaster
			? 'border-green-500 dark:border-green-400 focus:ring-green-500 text-green-500'
			: 'border-red-500 dark:border-red-400 focus:ring-red-500 text-red-500'}"
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
		class="inline-flex items-center px-3 rounded-r-md border-l-0 text-blue-700 hover:text-white border dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600 border-gray-300 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm  text-center dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800 umami--click--clip-reload-button"
		on:click={loadData}><Fa icon={faRotate} class={loading ? 'animate-spin' : ''} /></button
	>
</div>
<div class="flex flex-col flex-wrap content-center gap-2 pt-3 pb-3">
	{#each meta.content as clip}
		<div class="max-w-3xl">
			<Clip
				id={clip.id}
				title={clip.title}
				game={clip.game}
				broadcasterName={clip.broadcasterName}
				creatorName={clip.creatorName}
				thumbnailUrl={clip.thumbnailUrl}
				clipDateString={clip.createdAt}
				videoId={clip.videoId}
				views={clip.viewCount}
			/>
		</div>
	{/each}
</div>
<div class="flex flex-col items-center pb-3">
	<!-- Help text -->
	<span class="text-sm text-gray-700 dark:text-gray-400">
		Showing <span class="font-semibold text-gray-900 dark:text-white"
			>{Math.min(meta.currentPage * pageSize + 1, meta.totalElements)}</span
		>
		to
		<span class="font-semibold text-gray-900 dark:text-white"
			>{Math.min((1 + meta.currentPage) * pageSize, meta.totalElements)}</span
		>
		of <span class="font-semibold text-gray-900 dark:text-white">{meta.totalElements}</span> Entries
	</span>
	<!-- Buttons -->
	<div class="inline-flex mt-2 xs:mt-0">
		<button
			class="py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white umami--click--previous-page-button"
			on:click={decrementPageNumber}
		>
			Prev
		</button>
		<button
			class="py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-r border-0 border-l border-gray-700 hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white umami--click--next-page-button"
			on:click={incrementPageNumber}
		>
			Next
		</button>
	</div>
</div>
