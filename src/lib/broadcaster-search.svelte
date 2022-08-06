<script lang="ts">
	import { broadcasterStore, allBroadcasterStore } from '/src/stores/broadcasters';
	import { writable } from 'svelte/store';
	import { onMount } from 'svelte';

	let foundBroadcaster = false;
	let unfilteredBroadcasterStore = writable($broadcasterStore);

	onMount(async () => {
        unfilteredBroadcasterStore.subscribe(checkBroadcaster);
        allBroadcasterStore.subscribe(()=> checkBroadcaster($broadcasterStore));
	});

	function checkBroadcaster(name: string) {
        const t = $allBroadcasterStore;
		if (t.includes(name.toLowerCase())) {
			foundBroadcaster = true;
			broadcasterStore.set(name);
		} else {
			foundBroadcaster = false;
		}
	}
</script>

<input
	type="search"
	class="w-full max-w-xs bg-gray-50 border block flex-1 min-w-0 text-sm p-2.5  dark:bg-gray-700 dark:placeholder-gray-400 {foundBroadcaster
		? 'border-green-500 text-green-900 focus:ring-green-500 focus:border-green-500 dark:bg-green-100 dark:border-green-400'
		: 'border-red-500 text-red-900 focus:ring-red-500 focus:border-red-500 dark:bg-red-100 dark:border-red-400'}"
	placeholder="Broadcaster"
	bind:value={$unfilteredBroadcasterStore}
	list="broadcaster-autocomplete"
/>
<datalist id="broadcaster-autocomplete">
	{#each $allBroadcasterStore as broadcaster}
		<option>{broadcaster}</option>
	{/each}
</datalist>
