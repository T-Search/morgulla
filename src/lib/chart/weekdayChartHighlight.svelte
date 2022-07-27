<script>
	import { onMount } from 'svelte';
	import Chart from 'chart.js/auto/auto.js';

	let portfolio;
	export let data;
	const config = {
		type: 'pie',
		data: data,
		options: {
			borderRadius: '10',
			plugins: {
				legend: {
					position: 'top'
				},
				title: {
					display: true,
					text: 'Highlights pro Wochentag'
				},
                labels: {
                    render: 'value'
                }
			},
			responsive: true
		}
	};
	onMount(() => {
		const ctx = portfolio.getContext('2d');
		// Initialize chart using default config set
		var monthChart = new Chart(ctx, config);
	});
</script>

<canvas bind:this={portfolio} />
