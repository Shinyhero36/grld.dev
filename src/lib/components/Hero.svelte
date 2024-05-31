<script>
	import Button from '$lib/components/Button/Button.svelte';
	import GithubLogo from 'phosphor-svelte/lib/GithubLogo';
	import LinkedinLogo from 'phosphor-svelte/lib/LinkedinLogo';

	import { socials } from '$lib/config';
</script>

<div class="hero">
	<h1 class="really-big-title">Arranging pixels for fun</h1>
	<p class="text-lg">
		I'm Gérald Leban — Fullstack web developer<br />
		CS undergraduate student
	</p>
	<div class="socials">
		<Button variant="neutral" href={socials.github} icon>
			<GithubLogo size={24} />
		</Button>
		<Button variant="neutral" href={socials.linkedin} icon>
			<LinkedinLogo size={24} />
		</Button>
		<Button variant="neutral" href="mailto:{socials.mail}" icon>
			<GithubLogo size={24} />
		</Button>
	</div>
</div>

<style lang="scss">
	.hero {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-5xl);

		height: 70vh;

		padding-top: 100px;

		max-width: 888px;
		margin: 0 auto;

		@media screen and (max-width: 768px) {
			gap: var(--spacing-3xl);
		}

		> h1 {
			text-align: center;
		}

		> p {
			text-align: center;
			color: var(--text-subtle-neutral);
		}
	}

	.socials {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: var(--spacing-3xl);
	}
</style>
