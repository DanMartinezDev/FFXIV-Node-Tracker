<script lang="ts">
	let spacing = 10;
	let duration = '.1s';
</script>

<div class="time-line-container">
	{#each { length: 101 } as _, ticks}
		<div class="time-tick" style="--start: {ticks * spacing}px; --distance: {ticks * spacing - spacing}px; --duration: {duration};">|</div>
	{/each}
</div>

<style>
	.time-line-container {
		position: relative;
		border: thin solid #fff;
		padding-bottom: 23px;
		width: 1000px;
	}

	.time-tick {
		padding: 0px;
		animation-name: time-tick-keyframe;
		position: absolute;
		animation-duration: var(--duration);
		animation-iteration-count: infinite;
		animation-timing-function: linear;
		animation-direction: normal;
		animation-play-state: running;
		animation-fill-mode: backwards;
		color: #fff;
	}

	@keyframes time-tick-keyframe {
		0% {
			left: var(--start);
		}
		100% {
			left: var(--distance);
		}
	}
</style>
