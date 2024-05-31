<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import MoonStars from 'phosphor-svelte/lib/MoonStars';
</script>

<header>
	<a href="/" id="logo">Gérald</a>

	<div class="actions">
		<Button variant="neutral-ghost" icon onclick={undefined}>
			<MoonStars size={24} />
		</Button>
		<Button variant="neutral-ghost" href="/about">About</Button>
	</div>
</header>

<style lang="scss">
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;

		height: 88px;

		.actions {
			display: flex;
			align-items: center;
			gap: var(--spacing-xs);
		}

		#logo {
			font-size: 36px;
			font-weight: bold;
			font-family: var(--font-heading);

			text-decoration: none;

			&:visited {
				color: inherit;
			}
		}
	}
</style>
