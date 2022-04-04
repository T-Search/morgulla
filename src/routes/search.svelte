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

<div class="flex justify-center gap-1 pt-3">
	<input
		type="search"
		class="w-9/12 max-w-lg text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700"
		placeholder="Nurse"
		autofocus
		on:input={handleInput}
	/>
	<button
		class="flex-none px-4 py-2 font-semibold text-sm bg-cyan-800 text-slate-400 rounded-full shadow-sm"
		><Fa icon={faMagnifyingGlass} /></button
	>
</div>
