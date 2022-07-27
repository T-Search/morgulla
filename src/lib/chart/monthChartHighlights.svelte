<script>
	import { onMount } from 'svelte';
	import Chart from 'chart.js/auto/auto.js';

	let portfolio;
	export let data;
	const config = {
		type: 'bar',
		data: data,
		options: {
			borderRadius: '10',
			plugins: {
				title: {
					display: true,
					text: 'Highlights pro Monat'
				}
			},
			responsive: true,
			scales: {
				y: {
					min: 0,
					title: {
						display: true,
						text: 'Erstellte Highlights'
					}
				}
			}
		}
	};
	onMount(() => {
		const ctx = portfolio.getContext('2d');
		// Initialize chart using default config set
		var monthChart = new Chart(ctx, config);
	});
</script>

<canvas bind:this={portfolio} />
