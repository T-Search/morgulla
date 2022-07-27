<script lang="ts">
	export let title: string;
	export let count: number;
	export let last30days: number | null = null;
	export let color: 'red' | 'blue' | 'green';
</script>

<div class="rounded-lg custom-bg-{color} text-center text-white">
	<span class="font-bold text-2xl">{count.toLocaleString()}</span>
    {#if last30days != null}
	<span class="inline-flex"
		>+ {last30days.toLocaleString()}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="26"
			height="26"
			fill="currentColor"
			class="h-5 mr-2 bi bi-arrow-up-right-square-fill"
			viewBox="0 0 16 16"
		>
			<path
				d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707z"
			/>
		</svg>
	</span>
    {/if}

	<p class="text-xl">{title}</p>
</div>

<style>
	.custom-bg-blue {
		background-color: #3c69e7;
	}

	.custom-bg-red {
		background-color: #e52b50;
	}

	.custom-bg-green {
		background-color: #3b7a57;
	}
</style>
