<footer
	class="p-4 mt-3 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800"
>
	<!-- svelte-ignore missing-declaration -->
	<span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
		>© 2022 Skillkiller - v{__APP_VERSION__} -
		<a
			href="https://github.com/T-Search/morgulla/commit/{__COMMIT_HASH__}"
			target="_blank"
			class="hover:underline">{__COMMIT_HASH__.substring(0, 7)}</a
		>
	</span>
	<ul class="flex flex-wrap items-center gap-3 mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
				<li>
			<a href="/license" class="hover:underline">License</a>
		</li>
		<li>
			<a href="https://www.skillkiller.de/impressum" class="hover:underline">Kontakt</a>
		</li>
	</ul>
</footer>
