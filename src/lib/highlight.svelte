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
	import { faUserGear } from '@fortawesome/free-solid-svg-icons/faUserGear';
	import { faStopwatch } from '@fortawesome/free-solid-svg-icons/faStopwatch';

	export let id;
	export let title;
	export let dateString;
	export let broadcasterName;
	export let thumbnailUrl;
	export let views;
	export let description;
	export let duration;

	let dateFormatted;
	$: {
		dateFormatted = new Date(dateString).toLocaleDateString(locale, dateStringOptions);
	}

</script>

<a
	href="https://www.twitch.tv/videos/{id}"
	target="_blank"
	class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
>
	<img
		class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none aspect-video"
		src={thumbnailUrl}
		alt="Highlight Thumbnail"
	/>
	<div class="flex flex-col justify-between p-4 leading-normal w-full">
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white break-word">{title}</h5>
		<div
			class="mb-3 font-normal text-gray-700 dark:text-gray-400 grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-x-4 w-full"
		>
			<div>
				<Fa icon={faFingerprint} class="inline" />
				{id}
			</div>
			<div>
				<Fa icon={faSignal} class="inline" />
				{broadcasterName}
			</div>
			<div>
				<Fa icon={faCalendarDays} class="inline" />
				{dateFormatted}
			</div>
			<div>
				<Fa icon={faEye} class="inline" />
				{views}
			</div>
			<div>
				<Fa icon={faStopwatch} class="inline" />
				{duration}
			</div>
		</div>
		{#if description}
			<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
		{/if}
	</div>
</a>
