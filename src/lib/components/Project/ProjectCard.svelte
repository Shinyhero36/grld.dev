<script lang="ts">
	interface Props {
		title: string;
		description: string;

		invertY?: boolean;

		preview?: any;
	}

	const { title, description, invertY = false, preview }: Props = $props();
</script>

<div class="project-card" class:invertY>
	<!-- Preview -->
	{#if preview}
		{@render preview()}
	{/if}
	<!-- Content -->
	<div class="info">
		<h3 class="text-xl">{title}</h3>
		<p>{description}</p>
	</div>
</div>

<style lang="scss">
	.project-card {
		height: 100%;

		display: flex;
		flex-direction: column;
		justify-content: space-between;
		overflow: hidden;
		border-radius: var(--rounded-2xl);

		background-color: var(--bg-component-subtle-neutral);
	}

	.project-card.invertY {
		flex-direction: column-reverse;
	}

	.project-card > .info {
		padding: var(--spacing-3xl);
		z-index: 10;
	}

	.project-card > .info > p {
		color: var(--text-subtle-neutral);
	}
</style>
