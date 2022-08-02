<script>
	import Box from '$lib/chart/box.svelte';
	import BarChart from '$lib/chart/barChart.svelte';
	import LineChart from '$lib/chart/lineChart.svelte';
	import PiChart from '$lib/chart/piChart.svelte';

	import { browser } from '$app/env';

	export const locale = browser && (window.navigator.userLanguage || window.navigator.language);
		export const dateStringOptions = {
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		year: '2-digit',
		month: '2-digit',
		day: '2-digit'
	};

		const d = {"boxStatistics":{"highlights":4213,"highlightsLast30Days":167,"clips":17309,"clipsLast30Days":225,"games":84},"highlightsPerMonth":{"labels":["August 2021","September 2021","Oktober 2021","November 2021","Dezember 2021","Januar 2022","Februar 2022","März 2022","April 2022","Mai 2022","Juni 2022","Juli 2022"],"datasets":[{"name":"Highlights","data":[70,110,109,140,195,248,245,250,318,292,207,202]}]},"highlightsPerWeekday":{"labels":["Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag","Sonntag"],"datasets":[{"name":"Highlights","data":[843,206,571,714,624,569,686]}]},"clipsPerMonth":{"labels":["August 2021","September 2021","Oktober 2021","November 2021","Dezember 2021","Januar 2022","Februar 2022","März 2022","April 2022","Mai 2022","Juni 2022","Juli 2022"],"datasets":[{"name":"Clips","data":[250,198,173,140,86,189,341,290,371,557,349,283]}]},"clipsPerHour":{"labels":["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23"],"datasets":[{"name":"Clips","data":[1881,1823,1563,1112,752,498,890,951,742,529,305,246,171,200,190,162,136,185,172,209,282,831,1576,1903]}]},"clipsPerGame":{"labels":["Dead by Daylight","Hunt: Showdown","Deathgarden: BLOODHARVEST","Far Cry 5","Unbekannt","Apex Legends","Phasmophobia","Sekiro: Shadows Die Twice","A Plague Tale: Innocence","Vampire: The Masquerade - Bloodhunt","75 andere Spiele"],"datasets":[{"name":"Spiele","data":[14768,1353,229,76,53,47,35,33,31,26,658]}]},"clipperPerCount":{"labels":["Gammalunatic","Sonnen_blume95","chainsawface","Icewoman","CrimsonFrost87","VanilleColax","1SaltySurvivor","Kahron","Leonie__________","Unbekannt","3834 andere Clipper"],"datasets":[{"name":"Clipper","data":[3826,981,578,328,233,191,173,159,152,149,10539]}]},"clipperPerViews":{"labels":["Gammalunatic","Icewoman","Simplyplayer","Lanzurada","CatNight","Unbekannt","Sonnen_blume95","Kahron","CrimsonFrost87","D4sW1ck","3834 andere Clipper"],"datasets":[{"name":"Clipper","data":[21268,15984,9395,4968,4258,3517,3210,3055,2968,2637,85960]}]},"calculatedAt":"2022-08-02T23:01:58.979977331Z"};
</script>

<svelte:head>
	<title>Statistiken</title>
</svelte:head>

<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
	<Box
		title="Highlights"
		count={d.boxStatistics.highlights}
		last30days={d.boxStatistics.highlightsLast30Days}
		color="blue"
	/>
	<Box
		title="Clips"
		count={d.boxStatistics.clips}
		last30days={d.boxStatistics.clipsLast30Days}
		color="red"
	/>
	<Box title="gespielte Spiele" count={d.boxStatistics.games} color="green" />
</div>

<div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-5">
	<div class="col-span-1 md:col-span-3 text-4xl text-center bg-[#3c69e7] p-2 rounded-lg text-white">
		<span>Highlights</span>
	</div>
	<div class="col-span-1 md:col-span-2">
		<BarChart
			chartTitle="Highlights pro Monat"
			yAxesName="Erstelle Highlights"
			labels={d.highlightsPerMonth.labels}
			dataset={d.highlightsPerMonth.datasets[0]}
		/>
	</div>
	<div class="col-span-1">
		<PiChart
			chartTitle="Highlights pro Wochentag"
			labels={d.highlightsPerWeekday.labels}
			dataset={d.highlightsPerWeekday.datasets[0]}
		/>
	</div>
</div>

<div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-5">
	<div class="col-span-1 md:col-span-3 text-4xl text-center bg-[#3c69e7] p-2 rounded-lg text-white">
		<span>Clips</span>
	</div>
	<div class="col-span-1">
		<BarChart
			chartTitle="Clips pro Monat"
			yAxesName="Erstelle Clips"
			labels={d.clipsPerMonth.labels}
			dataset={d.clipsPerMonth.datasets[0]}
		/>
	</div>
	<div class="col-span-1">
		<LineChart
			chartTitle="Clip Erstellung nach Uhrzeit"
			yAxesName="Erstelle Clips"
			labels={d.clipsPerHour.labels}
			dataset={d.clipsPerHour.datasets[0]}
		/>
	</div>
	<div class="col-span-1">
		<PiChart chartTitle="Erstelle Clips nach Spiel" labels={d.clipsPerGame.labels} dataset={d.clipsPerGame.datasets[0]} />
	</div>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-5">
	<div class="col-span-1 md:col-span-2 text-4xl text-center bg-[#3c69e7] p-2 rounded-lg text-white">
		<span>Clipper</span>
	</div>
	<div class="col-span-1">
		<PiChart chartTitle="Top Clipper durch Anzahl an Clips" labels={d.clipperPerCount.labels} dataset={d.clipperPerCount.datasets[0]} />
	</div>
	<div class="col-span-1">
		<PiChart chartTitle="Top Clipper durch Views an Clips" labels={d.clipperPerViews.labels} dataset={d.clipperPerViews.datasets[0]} />
	</div>
</div>

<span class="box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2">
  Berechnet am {new Date(d.calculatedAt).toLocaleDateString(locale, dateStringOptions)}
</span>
