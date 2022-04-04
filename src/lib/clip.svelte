<script>
	import Fa from 'svelte-fa';
	import moment from 'moment';
	import {
faAirFreshener,
		faCalendarDays,
		faEye,
		faFingerprint,
		faGamepad,
		faSignal,
		faTv,
		faUser,
		faUserGear
	} from '@fortawesome/free-solid-svg-icons';

	export let id;
	export let title;
	export let game;
	export let clipDateString;
	export let broadcasterName;
	export let creatorName;
	export let thumbnailUrl;
	export let videoId;
	export let views;
</script>

<a
	href="https://clips.twitch.tv/{id}"
	target="_blank"
	class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
>
	<img
		class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg aspect-video"
		src="{thumbnailUrl.replaceAll("-480x272", "")}"
		alt="Clip Thumbnail"
	/>
	<div class="flex flex-col justify-between p-4 leading-normal">
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
		<div class="mb-3 font-normal text-gray-700 dark:text-gray-400 grid grid-cols-1 md:grid-cols-2 grid-flow-row">
			<div class="md:col-span-2">
				<Fa icon={faFingerprint} class="inline" />
				{id}
			</div>
			<div>
				<Fa icon={faCalendarDays} class="inline" />
				{moment(clipDateString).format('LTS l')}
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
