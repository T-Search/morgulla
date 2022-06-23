<script>
	import MonthChart from '$lib/chart/monthChart.svelte';


    const t = {"labels":["Dezember 2021","Januar 2022","Februar 2022","März 2022","April 2022","Mai 2022"],"datasets":[{"label":"Creator","data":[86,205,352,296,373,515],"type":"bar","hidden":false,"backgroundColor":"#f28e2b","borderColor":"#f28e2b","yAxisID":"y"},{"label":"Creator %","data":[4.71,11.22,19.27,16.2,20.42,28.19],"type":"line","hidden":false,"backgroundColor":"#7f4f1e","borderColor":"#7f4f1e","yAxisID":"y1"},{"label":"Andere Streamer %","data":[13.78,15.82,14.54,15.32,20.24,20.29],"type":"line","hidden":false,"backgroundColor":"#e15759","borderColor":"#e15759","yAxisID":"y1"}]}
</script>

<svelte:head>
	<title>Statistiken</title>
</svelte:head>

<div class="w-1/3">
	<MonthChart data={t} />
</div>
