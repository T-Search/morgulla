<script>
	import Fa from 'svelte-fa';
	import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
	import debounce from 'lodash/debounce';

	let q = '';
	$: console.log('Q: ' + q);

	const handleInput = debounce((/** @type {{ target: { value: string; }; }} */ e) => {
		q = e.target.value;
	}, 300);
</script>

<div class="flex pt-3 justify-center w-full">
	<input
		type="search"
		class="rounded-none w-9/12 max-w-lg rounded-l-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
		placeholder="Bonnie Green"
		on:input={handleInput}
	/>
	<button
		type="button"
		class="inline-flex items-center px-3 rounded-r-md border-l-0 text-blue-700 hover:text-white border dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600 border-gray-300 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm  text-center dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
		><Fa icon={faMagnifyingGlass} /></button
	>
</div>
