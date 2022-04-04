<script>
	import Fa from 'svelte-fa';
	import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
	import debounce from 'lodash/debounce';
	import Clip from '$lib/clip.svelte';

	let q = '';
	$: console.log('Q: ' + q);

	let clips = [
		{
			id: 'AbrasivePreciousMinkGrammarKing',
			created_at: '2021-01-23 00:05:15.000000',
			creator_id: '107203451',
			creator_name: 'DESPENCHION',
			duration: 6.5,
			game: 'Just Chatting',
			language: 'de',
			thumbnail_url: 'https://clips-media-assets2.twitch.tv/AT-cm%7C1018135723-preview-480x272.jpg',
			title: '"ja"',
			video_id: null,
			view_count: 451454,
			broadcaster_id: 95603047
		},
		{
			id: 'AbrasiveGentleChipmunkPartyTime',
			created_at: '2020-08-25 21:37:23.000000',
			creator_id: '56853967',
			creator_name: 'L0RINDA',
			duration: 11.3,
			game: 'EVE Online',
			language: 'en',
			thumbnail_url: 'https://clips-media-assets2.twitch.tv/AT-cm%7C834955165-preview-480x272.jpg',
			title: 'Niarja Falls',
			video_id: 713929023,
			view_count: 344598,
			broadcaster_id: 40860651
		},
		{
			id: 'PiliableDullDoveFreakinStinkin',
			created_at: '2018-09-30 12:56:41.000000',
			creator_id: '72875324',
			creator_name: 'NjniaVanDerWald',
			duration: 18.5,
			game: 'Talk Shows & Podcasts',
			language: 'de',
			thumbnail_url: 'https://clips-media-assets2.twitch.tv/AT-cm%7C317911191-preview-480x272.jpg',
			title: 'legendary lego catastrophy',
			video_id: null,
			view_count: 129534,
			broadcaster_id: 26764651
		},
		{
			id: 'ThoughtfulSuspiciousSwanANELE',
			created_at: '2019-07-11 11:56:01.000000',
			creator_id: '136130776',
			creator_name: 'DerSchaeler',
			duration: 33.1,
			game: 'PUBG: BATTLEGROUNDS',
			language: 'de',
			thumbnail_url: 'https://clips-media-assets2.twitch.tv/AT-cm%7C492703004-preview-480x272.jpg',
			title: 'Pan Power! by Eisenp3lz',
			video_id: null,
			view_count: 116950,
			broadcaster_id: 133612930
		},
		{
			id: 'OriginalCulturedWrenchDxAbomb',
			created_at: '2021-02-01 21:08:01.000000',
			creator_id: '182942377',
			creator_name: 'HEIYO2',
			duration: 26,
			game: 'Just Chatting',
			language: 'de',
			thumbnail_url:
				'https://clips-media-assets2.twitch.tv/40406470077-offset-12060-preview-480x272.jpg',
			title: 'DIE BESTE KARTE IM DISPLAY!! ',
			video_id: null,
			view_count: 72446,
			broadcaster_id: 64342766
		},
		{
			id: 'ShortCalmPresidentChocolateRain',
			created_at: '2019-08-21 20:49:30.000000',
			creator_id: '58429740',
			creator_name: 'lHybr1dl',
			duration: 23.1,
			game: 'Special Events',
			language: 'de',
			thumbnail_url: 'https://clips-media-assets2.twitch.tv/AT-cm%7C519169799-preview-480x272.jpg',
			title: 'AoE4',
			video_id: null,
			view_count: 68604,
			broadcaster_id: 26764651
		},
		{
			id: 'BombasticCharmingCaribouKappaPride',
			created_at: '2018-08-02 23:41:47.000000',
			creator_id: '64340525',
			creator_name: 'suuN',
			duration: 37.8,
			game: 'Age of Empires II',
			language: 'de',
			thumbnail_url: 'https://clips-media-assets2.twitch.tv/AT-cm%7C283399063-preview-480x272.jpg',
			title: 'Get Boared!',
			video_id: null,
			view_count: 62946,
			broadcaster_id: 47627824
		},
		{
			id: 'PlumpGrossLyrebirdRedCoat',
			created_at: '2020-07-11 15:13:36.000000',
			creator_id: '231213910',
			creator_name: 'King0fLIDL',
			duration: 5,
			game: 'Just Chatting',
			language: 'de',
			thumbnail_url: 'https://clips-media-assets2.twitch.tv/AT-cm%7C781190185-preview-480x272.jpg',
			title: 'LOL WER DAS LIEST IST HARDCORE CRINGE',
			video_id: null,
			view_count: 59677,
			broadcaster_id: 95603047
		},
		{
			id: 'CheerfulIntelligentMetalCopyThis',
			created_at: '2019-08-20 08:40:58.000000',
			creator_id: '164276939',
			creator_name: 'E1rond_McBong',
			duration: 52.6,
			game: 'PUBG: BATTLEGROUNDS',
			language: 'de',
			thumbnail_url: 'https://clips-media-assets2.twitch.tv/AT-cm%7C518208578-preview-480x272.jpg',
			title: 'Verfolgungsjagd am Morgen vertreibt Kummer und Sorgen!',
			video_id: null,
			view_count: 55122,
			broadcaster_id: 133612930
		},
		{
			id: 'ColorfulRacyTrayNinjaGrumpy-rL8LMtUoGsNpnRwd',
			created_at: '2021-03-13 17:19:23.000000',
			creator_id: '199140518',
			creator_name: 'mr_braunbaer',
			duration: 26,
			game: 'Just Chatting',
			language: 'de',
			thumbnail_url:
				'https://clips-media-assets2.twitch.tv/40995311965-offset-18424-preview-480x272.jpg',
			title: 'Ich schreie, also mach mich leiser!',
			video_id: null,
			view_count: 49172,
			broadcaster_id: 64342766
		}
	];

	const handleInput = debounce((/** @type {{ target: { value: string; }; }} */ e) => {
		q = e.target.value;
	}, 300);
</script>

<svelte:head>
	<title>Clip Suche</title>
</svelte:head>

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
<h1 class="text-gray-900 dark:text-white">{q}</h1>
<div class="flex flex-col flex-wrap content-center gap-2 pt-3">
	{#each clips as clip}
		<div class="max-w-3xl">
			<Clip
				id={clip.id}
				title={clip.title}
				game={clip.game}
				broadcasterName="Gammalunatic"
				creatorName={clip.creator_name}
				thumbnailUrl={clip.thumbnail_url}
				clipDateString={clip.created_at}
				videoId={clip.video_id}
				views={clip.view_count}
			/>
		</div>
	{/each}
</div>
