<script lang="ts">
</script>

<div class="round-time-bar" data-style="smooth" style="--duration: 60;">
	<div></div>
</div>

<style>
	.round-time-bar {
		margin: 1rem;
		overflow: hidden;
	}
	.round-time-bar div {
		height: 5px;
		animation: roundtime calc(var(--duration) * 1s) steps(var(--duration)) forwards;
		transform-origin: left center;
		background: linear-gradient(to bottom, red, #900);
	}

	.round-time-bar[data-style='smooth'] div {
		animation: roundtime calc(var(--duration) * 1s) linear forwards;
	}

	.round-time-bar[data-style='fixed'] div {
		width: calc(var(--duration) * 5%);
	}

	.round-time-bar[data-color='blue'] div {
		background: linear-gradient(to bottom, #64b5f6, #1565c0);
	}

	@keyframes roundtime {
		to {
			/* More performant than `width` */
			transform: scaleX(0);
		}
	}
</style>
