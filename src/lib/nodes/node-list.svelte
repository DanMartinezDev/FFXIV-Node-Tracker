<script lang="ts">
	import Node from '$lib/nodes/node.svelte';
	import { GatheringNode } from '$lib/nodes/Node';
	import AllGatheringNodes from '$lib/nodes/NodeData';
</script>

<div class="node-list-container">
	{#each AllGatheringNodes as node}
		<Node {node}></Node>
	{/each}
</div>

<style>
	.node-list-container {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: flex-start;

		background-color: #333;

		min-width: 100vw;
		min-height: 100vh;

		padding: 0px 0px 0px 0px;
	}
</style>
