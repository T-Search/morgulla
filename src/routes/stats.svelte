<script>
	import Box from '$lib/chart/box.svelte';
	import BarChart from '$lib/chart/barChart.svelte';
	import LineChart from '$lib/chart/lineChart.svelte';
	import PiChart from '$lib/chart/piChart.svelte';

	const d = {
		boxStatistics: {
			highlights: 4201,
			highlightsLast30Days: 190,
			clips: 17277,
			clipsLast30Days: 253,
			games: 84
		},
		highlightsPerMonth: {
			labels: [
				'Juli 2021',
				'August 2021',
				'September 2021',
				'Oktober 2021',
				'November 2021',
				'Dezember 2021',
				'Januar 2022',
				'Februar 2022',
				'März 2022',
				'April 2022',
				'Mai 2022',
				'Juni 2022'
			],
			datasets: [
				{ name: 'Highlights', data: [68, 70, 110, 109, 140, 195, 248, 245, 250, 318, 292, 207] }
			]
		},
		highlightsPerWeekday: {
			labels: ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'],
			datasets: [{ name: 'Clips', data: [2217, 1277, 2653, 2821, 2599, 2405, 3305] }]
		},
		clipsPerMonth: {
			labels: [
				'Juli 2021',
				'August 2021',
				'September 2021',
				'Oktober 2021',
				'November 2021',
				'Dezember 2021',
				'Januar 2022',
				'Februar 2022',
				'März 2022',
				'April 2022',
				'Mai 2022',
				'Juni 2022'
			],
			datasets: [
				{ name: 'Clips', data: [361, 250, 198, 173, 140, 86, 189, 341, 290, 371, 557, 349] }
			]
		},
		clipsPerHour: {
			labels: [
				'0',
				'1',
				'2',
				'3',
				'4',
				'5',
				'6',
				'7',
				'8',
				'9',
				'10',
				'11',
				'12',
				'13',
				'14',
				'15',
				'16',
				'17',
				'18',
				'19',
				'20',
				'21',
				'22',
				'23'
			],
			datasets: [
				{
					name: 'Clips',
					data: [
						1878, 1822, 1559, 1104, 751, 495, 889, 951, 741, 529, 305, 246, 171, 200, 190, 162, 136,
						186, 171, 210, 283, 829, 1569, 1900
					]
				}
			]
		},
		clipsPerGame: {
			labels: [
				'Dead by Daylight',
				'Hunt: Showdown',
				'Deathgarden: BLOODHARVEST',
				'Far Cry 5',
				'Unbekannt',
				'Apex Legends',
				'Phasmophobia',
				'Sekiro: Shadows Die Twice',
				'A Plague Tale: Innocence',
				'Vampire: The Masquerade - Bloodhunt',
				'75 andere Spiele'
			],
			datasets: [{ name: 'Spiele', data: [14737, 1349, 233, 76, 53, 47, 35, 33, 31, 26, 657] }]
		},
		calculatedAt: '2022-07-30T23:50:08.963115065Z'
	};
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
