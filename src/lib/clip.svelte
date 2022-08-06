<script context="module" lang="ts">
	import { browser } from '$app/env';

	export const dateStringOptions: Intl.DateTimeFormatOptions = {
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		year: '2-digit',
		month: '2-digit',
		day: '2-digit'
	};

	export const locale = browser && (window.navigator['userLanguage'] || window.navigator.language);
</script>

<script>
	export let id;
	export let title;
	export let game;
	export let clipDateString;
	export let broadcasterName;
	export let creatorName;
	export let thumbnailUrl;
	export let videoId;
	export let views;

	$: {
		clipDateFormatted = new Date(clipDateString).toLocaleDateString(locale, dateStringOptions);
	}

	let clipDateFormatted;
</script>

<a
	href="https://clips.twitch.tv/{id}"
	target="_blank"
	class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
>
	<img
		class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none aspect-video"
		src={thumbnailUrl}
		alt="Clip Thumbnail"
	/>
	<div class="flex flex-col justify-between p-4 leading-normal w-full">
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white break-word">
			{title}
		</h5>
		<div
			class="mb-3 font-normal text-gray-700 dark:text-gray-400 grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-x-4"
		>
			<div class="md:col-span-2 flex items-center gap-1" title="ID des Clips">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="inline h-5 w-5"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z"
						clip-rule="evenodd"
					/>
					<path
						fill-rule="evenodd"
						d="M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.83z"
						clip-rule="evenodd"
					/>
					<path
						fill-rule="evenodd"
						d="M10 10a1 1 0 011 1c0 2.236-.46 4.368-1.29 6.304a1 1 0 01-1.838-.789A13.952 13.952 0 009 11a1 1 0 011-1z"
						clip-rule="evenodd"
					/>
				</svg>
				{id}
			</div>
			<div class="flex items-center gap-1" title="Datum der Erstellung">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="inline h-5 w-5"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
						clip-rule="evenodd"
					/>
				</svg>
				{clipDateFormatted}
			</div>
			<div class="flex items-center gap-1" title="Spiel des Clips">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="inline h-5 w-5"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1V9h-1v2zm1-4V5h-1v2h1zM5 5v2H4V5h1zm0 4H4v2h1V9zm-1 4h1v2H4v-2z"
						clip-rule="evenodd"
					/>
				</svg>
				{game}
			</div>
			<div class="flex items-center gap-1" title="Name des Streamers">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="inline h-5 w-5"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"
					/>
				</svg>
				{broadcasterName}
			</div>
			<div class="flex items-center gap-1" title="Name des Clip Erstellers">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="inline h-5 w-5"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"
					/>
				</svg>
				{creatorName}
			</div>
			<div class="flex items-center gap-1" title="Video Id aus dem der Clip erstellt wurde">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="inline h-5 w-5"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
						clip-rule="evenodd"
					/>
				</svg>
				{#if videoId != null}
					<a href="https://www.twitch.tv/videos/{videoId}" target="_blank">{videoId}</a><br />
				{/if}
			</div>
			<div class="flex items-center gap-1" title="Anzahl an Views">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="inline h-5 w-5"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
					<path
						fill-rule="evenodd"
						d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
						clip-rule="evenodd"
					/>
				</svg>
				{views.toLocaleString()}
			</div>
		</div>
	</div>
</a>
