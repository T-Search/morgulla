<script lang="ts">
	import Box from '$lib/chart/box.svelte';
	import BarChart from '$lib/chart/barChart.svelte';
	import LineChart from '$lib/chart/lineChart.svelte';
	import PiChart from '$lib/chart/piChart.svelte';

	import { browser } from '$app/env';
	import BroadcasterSearch from '$lib/broadcaster-search.svelte';
	import { broadcasterStore } from '/src/stores/broadcasters';
	import { writable, type Writable } from 'svelte/store';
	import type { StatisticData } from 'src/entity/StatisticData';
	import { text } from 'svelte/internal';

	export const locale = browser && (window.navigator['userLanguage'] || window.navigator.language);
	export const dateStringOptions = {
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		year: '2-digit',
		month: '2-digit',
		day: '2-digit'
	};

	const dataStore: Writable<StatisticData | null> = writable(null);
	const statusTextStore: Writable<LoadingStatus> = writable({ text: 'Lade Daten', error: false });

	interface LoadingStatus {
		text: string;
		error: boolean;
	}

	broadcasterStore.subscribe(updateCharts);

	function updateCharts() {
		statusTextStore.set({ text: 'Lade Daten', error: false });
		dataStore.set(null);
		let data = $broadcasterStore;
		if (data) {
			fetch(import.meta.env.VITE_API_BASE_URL + '/stats/' + $broadcasterStore).then(
				(res: Response) => {
					if (res.ok) {
						res.json().then((data) => {
							dataStore.set(data);
						});
					} else {
						statusTextStore.set({
							text: 'Code ' + res.status + ' - ' + (res.statusText ? res.statusText : 'Unbekannt'),
							error: true
						});
					}
				}
			);
		}
	}
</script>

<svelte:head>
	<title>Statistiken</title>
</svelte:head>

<div class="flex justify-center w-full pb-2">
	<BroadcasterSearch />
</div>
{#if $dataStore}
	<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
		<Box
			title="Highlights"
			count={$dataStore.boxStatistics.highlights}
			last30days={$dataStore.boxStatistics.highlightsLast30Days}
			color="blue"
		/>
		<Box
			title="Clips"
			count={$dataStore.boxStatistics.clips}
			last30days={$dataStore.boxStatistics.clipsLast30Days}
			color="red"
		/>
		<Box title="gespielte Spiele" count={$dataStore.boxStatistics.games} color="green" />
	</div>

	<div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-5">
		<div
			class="col-span-1 md:col-span-3 text-4xl text-center bg-[#3c69e7] p-2 rounded-lg text-white"
		>
			<span>Highlights</span>
		</div>
		<div class="col-span-1 md:col-span-2">
			<BarChart
				chartTitle="Highlights pro Monat"
				yAxesName="Erstelle Highlights"
				labels={$dataStore.highlightsPerMonth.labels}
				dataset={$dataStore.highlightsPerMonth.datasets[0]}
			/>
		</div>
		<div class="col-span-1">
			<PiChart
				chartTitle="Highlights pro Wochentag"
				labels={$dataStore.highlightsPerWeekday.labels}
				dataset={$dataStore.highlightsPerWeekday.datasets[0]}
			/>
		</div>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-5">
		<div
			class="col-span-1 md:col-span-3 text-4xl text-center bg-[#3c69e7] p-2 rounded-lg text-white"
		>
			<span>Clips</span>
		</div>
		<div class="col-span-1">
			<BarChart
				chartTitle="Clips pro Monat"
				yAxesName="Erstelle Clips"
				labels={$dataStore.clipsPerMonth.labels}
				dataset={$dataStore.clipsPerMonth.datasets[0]}
			/>
		</div>
		<div class="col-span-1">
			<LineChart
				chartTitle="Clip Erstellung nach Uhrzeit"
				yAxesName="Erstelle Clips"
				labels={$dataStore.clipsPerHour.labels}
				dataset={$dataStore.clipsPerHour.datasets[0]}
			/>
		</div>
		<div class="col-span-1">
			<PiChart
				chartTitle="Erstelle Clips nach Spiel"
				labels={$dataStore.clipsPerGame.labels}
				dataset={$dataStore.clipsPerGame.datasets[0]}
			/>
		</div>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-5">
		<div
			class="col-span-1 md:col-span-2 text-4xl text-center bg-[#3c69e7] p-2 rounded-lg text-white"
		>
			<span>Clipper</span>
		</div>
		<div class="col-span-1">
			<PiChart
				chartTitle="Top Clipper durch Anzahl an Clips"
				labels={$dataStore.clipperPerCount.labels}
				dataset={$dataStore.clipperPerCount.datasets[0]}
			/>
		</div>
		<div class="col-span-1">
			<PiChart
				chartTitle="Top Clipper durch Views an Clips"
				labels={$dataStore.clipperPerViews.labels}
				dataset={$dataStore.clipperPerViews.datasets[0]}
			/>
		</div>
	</div>

	<span class="box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2">
		Berechnet am {new Date($dataStore.calculatedAt).toLocaleDateString(locale, dateStringOptions)}
	</span>
{:else if !$statusTextStore.error}
	<div class="flex justify-center w-full pb-2">
		<!-- Loading Spinne from https://loading.io/css/ -->
		<div class="lds-facebook">
			<div />
			<div />
			<div />
		</div>
	</div>
{:else if $statusTextStore.error}
	<div class="flex justify-center w-full pb-2">
		<div class="text-4xl text-center bg-red-700 p-2 rounded-lg text-white">
			Fehler beim Laden der Daten<br />
			{$statusTextStore.text}
		</div>
	</div>
{/if}

<style>
	/* Loading Spinner */
	.lds-facebook {
		display: inline-block;
		position: relative;
		width: 80px;
		height: 80px;
	}
	.lds-facebook div {
		display: inline-block;
		position: absolute;
		left: 8px;
		width: 16px;
		background: #888;
		animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
	}
	.lds-facebook div:nth-child(1) {
		left: 8px;
		animation-delay: -0.24s;
	}
	.lds-facebook div:nth-child(2) {
		left: 32px;
		animation-delay: -0.12s;
	}
	.lds-facebook div:nth-child(3) {
		left: 56px;
		animation-delay: 0;
	}
	@keyframes lds-facebook {
		0% {
			top: 8px;
			height: 64px;
		}
		50%,
		100% {
			top: 24px;
			height: 32px;
		}
	}
</style>
