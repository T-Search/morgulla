<script lang="ts">
	import { onMount } from 'svelte';
	import {COLORS} from '$lib/chart/Util';
	import Chart from 'chart.js/auto/auto.js';

	import type {Dataset} from '$lib/chart/dataset';

	export let chartTitle: string;
	export let yAxesName: string;
	export let labels: string[];
	export let dataset: Dataset;

	let portfolio;
	const config = {
		type: 'bar',
		data: {
			labels: labels,
			datasets: [
				{
					label: dataset.name,
					data: dataset.data,
					backgroundColor: COLORS
				}
			]
		},
		options: {
			borderRadius: '10',
			plugins: {
				title: {
					display: true,
					text: chartTitle
				}
			},
			responsive: true,
			maintainAspectRatio: false,
			scales: {
				y: {
					min: 0,
					title: {
						display: true,
						text: yAxesName
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

<div class="aspect-video">
	<canvas bind:this={portfolio} />
</div>
