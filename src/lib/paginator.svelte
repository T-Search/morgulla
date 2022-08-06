<script>
	export let page = 0;
	export let pageSize;
	export let totalElements;
	export let pageChange = () => {};

	$: totalPages = Math.ceil(totalElements / pageSize);

	export function setPage(pageNumber) {
		page = pageNumber;
	}

	function incrementPageNumber() {
		if (totalPages - 1 > page) {
			page += 1;
			pageChange(page);
		}
	}

	function decrementPageNumber() {
		if (0 < page) {
			page -= 1;
			pageChange(page);
		}
	}
</script>

<div class="flex flex-col items-center">
	<!-- Help text -->
	<span class="text-sm text-gray-700 dark:text-gray-400">
		Zeige <span class="font-semibold text-gray-900 dark:text-white"
			>{Math.min(page * pageSize + 1, totalElements)}</span
		>
		bis
		<span class="font-semibold text-gray-900 dark:text-white"
			>{Math.min((1 + page) * pageSize, totalElements)}</span
		>
		von
		<span class="font-semibold text-gray-900 dark:text-white">{totalElements.toLocaleString()}</span
		> Einträge
	</span>
	<!-- Buttons -->
	<div class="inline-flex mt-2 xs:mt-0">
		<button
			class="py-2 px-4 text-sm font-medium rounded-l border text-center text-blue-700 hover:text-white dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700 border-gray-300 hover:bg-blue-800 dark:hover:bg-gray-700 dark:hover:text-white disabled:text-gray-400 disabled:dark:text-gray-600 umami--click--previous-page-button"
			on:click={decrementPageNumber}
			disabled={page == 0}
		>
			Vorherige
		</button>
		<button
			class="py-2 px-4 text-sm font-medium rounded-r border text-center text-blue-700 hover:text-white dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700 border-gray-300 hover:bg-blue-800 dark:hover:bg-gray-700 dark:hover:text-white disabled:text-gray-400 disabled:dark:text-gray-600 umami--click--next-page-button"
			on:click={incrementPageNumber}
			disabled={totalPages - 1 == page}
		>
			Nächste
		</button>
	</div>
</div>
