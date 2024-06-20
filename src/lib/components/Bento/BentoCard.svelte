<script lang="ts">
	interface BentoCardProps {
		title: string;
		description: string;

		textEnd?: boolean;
		gridArea: string;

		children?: any;
	}

	const { title, description, textEnd, gridArea, children }: BentoCardProps = $props();
</script>

<div class="bento-card" class:textEnd style="grid-area: {gridArea};">
	<div class="bento-card-info">
		<h3>{title}</h3>
		<p>{description}</p>
	</div>
	{#if children}
		{@render children()}
	{/if}
</div>

<style lang="scss">
	.bento-card {
		position: relative;

		display: flex;
		flex-direction: column;
		align-items: flex-start;

		border-radius: var(--rounded-3xl);
		min-height: 20rem;

		padding: 2rem;

		background-color: var(--bg-component-subtle-neutral);
	}

	.bento-card.textEnd {
		justify-content: flex-end;
	}

	.bento-card-info {
		max-width: 18rem;

		& > h3 {
			font-size: 2rem;
			line-height: 1.1;
			margin-bottom: 1rem;
		}

		& > p {
			color: var(--text-subtle-neutral);
		}
	}
</style>
