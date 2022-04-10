<script context="module">
	import { browser } from '$app/env';

	export const dateStringOptions = {
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		year: '2-digit',
		month: '2-digit',
		day: '2-digit'
	};

	export const locale = browser && (window.navigator.userLanguage || window.navigator.language);
</script>

<script>
	import Fa from 'svelte-fa';
	import { faCalendarDays } from '@fortawesome/free-solid-svg-icons/faCalendarDays';
	import { faEye } from '@fortawesome/free-solid-svg-icons/faEye';
	import { faFingerprint } from '@fortawesome/free-solid-svg-icons/faFingerprint';
	import { faGamepad } from '@fortawesome/free-solid-svg-icons/faGamepad';
	import { faSignal } from '@fortawesome/free-solid-svg-icons/faSignal';
	import { faTv } from '@fortawesome/free-solid-svg-icons/faTv';
	import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
	import { faUserGear } from '@fortawesome/free-solid-svg-icons/faUserGear';

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
	<div class="flex flex-col justify-between p-4 leading-normal">
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
		<div
			class="mb-3 font-normal text-gray-700 dark:text-gray-400 grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-x-4"
		>
			<div class="md:col-span-2">
				<Fa icon={faFingerprint} class="inline" />
				{id}
			</div>
			<div>
				<Fa icon={faCalendarDays} class="inline" />
				{clipDateFormatted}
			</div>
			<div>
				<Fa icon={faGamepad} class="inline" />
				{game}
			</div>
			<div>
				<Fa icon={faSignal} class="inline" />
				{broadcasterName}
			</div>
			<div>
				<Fa icon={faUserGear} class="inline" />
				{creatorName}
			</div>
			<div>
				<Fa icon={faTv} class="inline" />
				{#if videoId != null}
					<a href="https://www.twitch.tv/videos/{videoId}" target="_blank">{videoId}</a><br />
				{/if}
			</div>
			<div>
				<Fa icon={faEye} class="inline" />
				{views}
			</div>
		</div>
	</div>
</a>
