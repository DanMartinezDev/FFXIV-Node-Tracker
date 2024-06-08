<script lang='ts'>
    import Node from './node.svelte';    

    let itemCount: number = 35;
    let items: number[] = [];
    for (let i = 0; i < itemCount; i++) {
        items.push(i);
    }

</script>

<div class="node-list-container">
    {#each items as item}
        <Node></Node>
    {/each}
</div>

<style>
    .node-list-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;

        background-color: grey;

        min-width: 100vw;
        min-height: 100vh;

        padding: 0px 0px 0px 0px;
    }
</style>