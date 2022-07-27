<script>
	import Box from '$lib/chart/box.svelte';


</script>

<svelte:head>
	<title>Statistiken</title>
</svelte:head>

<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
  <Box title="Highlights" count={4168} last30days={184} color="blue"></Box>
  <Box title="Clips" count={17320} last30days={259} color="red"></Box>
  <Box title="Gespielte Spiele" count={83} color="green"></Box>
</div>
