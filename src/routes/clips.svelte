<script>
	import Fa from 'svelte-fa';
	import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
	import { faRotate } from '@fortawesome/free-solid-svg-icons/faRotate';
	import debounce from 'lodash/debounce.js';
	import Clip from '$lib/clip.svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { browser } from "$app/env";

	console.log()

	let q = '';
	let broadcaster = "";
	let clips = [];
	let foundBroadcaster = false;

	let possibleBroadcaster = [];

	const __API_URL__ = "https://alpha.tsearch.tools/api/datava/";

	onMount(async () => {
		q = localStorage.getItem('q') || '';
		broadcaster = localStorage.getItem('broadcaster') || '';
		//Load broadcaster
		const res = await fetch(__API_URL__ + '/broadcaster/all');
		const data = await res.json();
		possibleBroadcaster = data.map((name) => name.toLowerCase());
		checkBroadcaster();
		loadData();
	});

	async function loadData() {
		if (foundBroadcaster) {
			if(browser) {
				localStorage.setItem('q', q);
				localStorage.setItem('broadcaster', broadcaster);
			}
			var url = new URL(__API_URL__ + '/clip/search');
			var params = { broadcaster: broadcaster, q: q, pageNumber: 0, pageSize: 20 };
			url.search = new URLSearchParams(params).toString();

			const res = await fetch(url);
			const data = await res.json();
			clips = data['content'];
		} else {
			clips = [];
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
		checkBroadcaster();
		loadData();
	}, 300);

	const handleBroadcasterInput = debounce((/** @type {{ target: { value: string; }; }} */ e) => {
		broadcaster = e.target.value;
		checkBroadcaster();
		loadData();
	}, 300);
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
		value="{broadcaster}"
		on:input={handleBroadcasterInput}
	/>
	<input
		type="search"
		class="w-9/12 max-w-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
		placeholder="Bonnie Green"
		value="{q}"
		on:input={handleSearchInput}
	/>
	<button
		type="button"
		class="inline-flex items-center px-3 border-l-0 text-blue-700 hover:text-white border dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600 border-gray-300 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm  text-center dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
		><Fa icon={faMagnifyingGlass} /></button
	>
		<button
		type="button"
		class="inline-flex items-center px-3 rounded-r-md border-l-0 text-blue-700 hover:text-white border dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600 border-gray-300 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm  text-center dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
		on:click="{loadData}"
		><Fa icon={faRotate} /></button
	>
</div>
<div class="flex flex-col flex-wrap content-center gap-2 pt-3 pb-3">
	{#each clips as clip}
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
