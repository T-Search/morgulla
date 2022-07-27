<script>
	import Box from '$lib/chart/box.svelte';
	import MonthChart from '$lib/chart/monthChartHighlights.svelte';
	import WeekdayChartHighlight from '$lib/chart/weekdayChartHighlight.svelte';

	const d = {
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
			{
				label: 'Highlights',
				data: [361, 251, 198, 173, 140, 86, 189, 341, 290, 371, 557, 349],
				type: 'bar',
				hidden: false,
				backgroundColor: '#3c69e7',
				borderColor: '#3c69e7',
				yAxisID: 'y'
			}
		]
	};
	const d2 = {
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
			{
				label: 'Highlights',
				data: [361, 251, 198, 173, 140, 86, 189, 341, 290, 371, 557, 349],
				type: 'pie',
				hidden: false,
				backgroundColor: [
					'#4dc9f6',
					'#f67019',
					'#f53794',
					'#537bc4',
					'#acc236',
					'#166a8f',
					'#00a950',
					'#58595b',
					'#8549ba'
				]
			}
		]
	};
</script>

<svelte:head>
	<title>Statistiken</title>
</svelte:head>

<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
	<Box title="Highlights" count={4168} last30days={184} color="blue" />
	<Box title="Clips" count={17320} last30days={259} color="red" />
	<Box title="Gespielte Spiele" count={83} color="green" />
</div>

<div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-5">
	<div class="col-span-1 md:col-span-3 text-4xl text-center bg-[#3c69e7] p-2 rounded-lg text-white">
		<span>Highlights</span>
	</div>
	<div class="col-span-1 md:col-span-2"><MonthChart data={d} /></div>
	<div class="col-span-1"><WeekdayChartHighlight data={d2} /></div>
</div>

<div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-5">
	<div class="col-span-1 md:col-span-3 text-4xl text-center bg-[#3c69e7] p-2 rounded-lg text-white">
		<span>Clips</span>
	</div>
	<div class="col-span-1 md:col-span-3"><MonthChart data={d} /></div>
</div>
