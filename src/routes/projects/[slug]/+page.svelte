<script lang="ts">
	export let data;
	const { project, markdown } = data;
</script>

{#if project}
	<svelte:component this={markdown} />
{/if}
