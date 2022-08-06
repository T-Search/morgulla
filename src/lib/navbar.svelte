<script>
	import { page } from '$app/stores';

	$: activePageName = $page.routeId;
</script>

<nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 mb-3">
	<div class="container flex flex-wrap justify-between items-center mx-auto">
		<div class="flex items-center">
			<img src="/tsearch_64.svg" class="mr-3 h-6 sm:h-9" alt="T-Search Logo" />
			<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
				>T-Search</span
			>
		</div>
		<button
			data-collapse-toggle="mobile-menu"
			type="button"
			class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
			aria-controls="mobile-menu"
			aria-expanded="false"
		>
			<span class="sr-only">Open main menu</span>
			<svg
				class="w-6 h-6"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path
					fill-rule="evenodd"
					d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
					clip-rule="evenodd"
				/></svg
			>
			<svg
				class="hidden w-6 h-6"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path
					fill-rule="evenodd"
					d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
					clip-rule="evenodd"
				/></svg
			>
		</button>
		<div class="hidden w-full md:block md:w-auto" id="mobile-menu">
			<ul
				class="flex flex-col items-center mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"
			>
				<li>
					<a
						href="/clips"
						class="block py-2 pr-4 pl-3 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent
            {activePageName == 'clips'
							? 'text-gray-400 dark:text-gray-600'
							: 'text-gray-700 dark:text-gray-400'}">Clips</a
					>
				</li>
				<li>
					<a
						href="/highlights"
						class="block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700
            {activePageName == 'highlights'
							? 'text-gray-400 dark:text-gray-600'
							: 'text-gray-700 dark:text-gray-400'}">Highlights</a
					>
				</li>
				<li>
					<a
						href="/faq"
						class="block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700
            {activePageName == 'faq'
							? 'text-gray-400 dark:text-gray-600'
							: 'text-gray-700 dark:text-gray-400'}">FAQ</a
					>
				</li>
								<li>
					<a
						href="/stats"
						class="block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700
            {activePageName == 'stats'
							? 'text-gray-400 dark:text-gray-600'
							: 'text-gray-700 dark:text-gray-400'}">Statistiken</a
					>
				</li>
				<li>
					<a
						href="https://id.twitch.tv/oauth2/authorize?response_type=code&client_id={import.meta
							.env.VITE_CLIENT_ID}&redirect_uri={import.meta.env
							.VITE_BACKEND_REDIRECT_URI}&scope=&force_verify=true"
						class="text-white bg-[#9147FF] hover:bg-[#9147FF]/90 focus:ring-4 focus:outline-none focus:ring-[#9147FF]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#9147FF]/50 dark:hover:bg-[#9147FF]/30"
					>
						<svg
							class="h-5 mr-2"
							viewBox="0 0 256 268"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							preserveAspectRatio="xMidYMid"
						>
							<g>
								<path
									d="M17.4579119,0 L0,46.5559188 L0,232.757287 L63.9826001,232.757287 L63.9826001,267.690956 L98.9144853,267.690956 L133.811571,232.757287 L186.171922,232.757287 L256,162.954193 L256,0 L17.4579119,0 Z M40.7166868,23.2632364 L232.73141,23.2632364 L232.73141,151.29179 L191.992415,192.033461 L128,192.033461 L93.11273,226.918947 L93.11273,192.033461 L40.7166868,192.033461 L40.7166868,23.2632364 Z M104.724985,139.668381 L127.999822,139.668381 L127.999822,69.843872 L104.724985,69.843872 L104.724985,139.668381 Z M168.721862,139.668381 L191.992237,139.668381 L191.992237,69.843872 L168.721862,69.843872 L168.721862,139.668381 Z"
									fill="currentColor"
								/>
							</g>
						</svg>
						Sign in with Twitch
					</a>
				</li>
			</ul>
		</div>
	</div>
</nav>
