<script lang="ts">
	interface Props {
		title: string;
		description: string;
		slug: string;

		children?: any;
	}

	const { title, description, slug, children }: Props = $props();
</script>

<a href="/projects/{slug}">
	<div class="project">
		<div class="preview">
			{#if children}
				{@render children()}
			{/if}
		</div>
		<div class="info">
			<h3 class="text-xl">{title}</h3>
			<p class="text-md">{description}</p>
		</div>
	</div>
</a>

<style lang="scss">
	a {
		text-decoration: none;
		color: inherit;

		:visited {
			color: inherit;
		}
	}

	.project {
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		background-color: var(--bg-component-subtle-neutral);
		border-radius: var(--rounded-3xl);

		height: 100%;

		.info {
			padding: var(--spacing-3xl);
		}

		.info > p {
			color: var(--text-subtle-neutral);
		}
	}
</style>
