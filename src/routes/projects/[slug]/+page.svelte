<script lang="ts">
	export let data;
	const { project, markdown } = data;
</script>

{#if project}
	<h1>{project.title}</h1>
	<p>{project.summary}</p>

	<svelte:component this={markdown} />
{/if}
