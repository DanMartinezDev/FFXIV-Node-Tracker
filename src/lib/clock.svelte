<script lang="ts">
	import { onMount } from 'svelte';

	let date = new Date();
	$: hour = formatTime(getHour(date));
	$: min = formatTime(date.getMinutes());
	$: sec = formatTime(date.getSeconds());
	$: meridiem = date.getHours() > 12 ? 'PM' : 'AM';

	onMount(() => {
		setInterval(() => {
			date = new Date();
		}, 1000);
	});

	function getHour(date: Date) {
		let hour = date.getHours();

		if (hour <= 12) {
			return hour;
		} else {
			return date.getHours() - 12;
		}
	}

	function formatTime(number: Number) {
		return String(number).padStart(2, '0');
	}
</script>

<div class="clock-display">
	{hour} : {min} : {sec}
	{meridiem}
</div>

<style>
	.clock-display {
		color: #fff;
	}
</style>
