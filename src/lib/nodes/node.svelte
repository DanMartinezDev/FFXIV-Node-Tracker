<script lang="ts">
	import { GatheringNode, GatheringNodeType, Expansion } from '$lib/nodes/Node';
	export let node: GatheringNode;
</script>

<div class="node-container">
	<span class="light-text">{node.name}</span>
	<span>{node.expansion}</span>
</div>

<style>
	.node-container {
		background-color: #1b1b1b;
		width: 300px;
		height: 100px;
		margin: 20px;
	}
</style>
