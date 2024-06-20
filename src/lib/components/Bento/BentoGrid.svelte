<script lang="ts">
	interface BentoGridProps {
		children: any;
	}

	const { children }: BentoGridProps = $props();
</script>

<div class="bento-grid">
	{@render children()}
</div>

<!-- 
<style lang="scss">
	.bento-grid {
		display: grid;
		grid-auto-rows: minmax(0, 1fr);
		grid-template-columns: repeat(3, minmax(auto, 1fr));
		grid-auto-rows: 300px;

		max-width: 1100px;
		margin: var(--spacing-4xl) auto;

		gap: var(--spacing-4xl);

		:global(> :nth-child(1)) {
			grid-column: auto / span 1;
			grid-row: auto / span 2;
		}

		:global(> :nth-child(2)) {
			grid-column: auto / span 2;
		}

		:global(> :nth-child(3)),
		:global(> :nth-child(4)) {
			grid-column: auto / span 1;
		}

		:global(> :nth-child(5)) {
			grid-column: auto / span 2;
		}

		:global(> :nth-child(6)) {
			grid-column: auto / span 1;
		}
	}
</!-->

<style lang="scss">
	.bento-grid {
		max-width: 1200px;
		margin: 0 auto;

		display: grid;
		grid-column-gap: 2rem;
		grid-row-gap: 2rem;
		grid-template-rows: 1fr;
		grid-template-columns: 4fr 3fr 3fr;
		grid-auto-columns: 1fr;
	}
</style>
