<script lang="ts">
	import { allPosts } from 'content-collections';

	import Footer from '$lib/components/Footer.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import BentoGrid from '$lib/components/Bento/BentoGrid.svelte';
	import BentoCard from '$lib/components/Bento/BentoCard.svelte';
	import PollCard from '$lib/components/Poll/PollCard.svelte';
	import type { Poll } from '$lib/components/Poll/types';

	const fakePolls: Poll[] = [
		{
			author: 'Clembs',
			question: 'Should I cosplay as Sonic for the Sonic Symphony?',
			endIn: new Date('2024-12-31T23:59:59Z'),
			votes: 15
		},
		{
			author: 'FK4ATZ',
			question: 'Gérald wearing a kilt for his birthday ?',
			endIn: new Date('2024-06-14T23:59:59Z'),
			votes: 42
		},
		{
			author: 'Licane',
			question: 'Is git a must have for a developer?',
			endIn: new Date('2024-01-01T23:59:59Z'),
			votes: 69
		}
	];
</script>

<Hero />

<BentoGrid>
	{#each allPosts as post}
		<BentoCard title={post.title} description={post.summary} gridArea="1 / 1 / 3 / 2" />
		<BentoCard title={post.title} description={post.summary} textEnd gridArea="1 / 2 / 2 / 4" />
		<BentoCard title={post.title} description={post.summary} textEnd gridArea="2 / 2 / 3 / 3" />
		<BentoCard title={post.title} description={post.summary} gridArea="2 / 3 / 3 / 4" />
		<BentoCard title={post.title} description={post.summary} textEnd gridArea="3 / 1 / 4 / 3">
			<div class="preview">
				<div class="polls-grid">
					<div class="row">
						{#each fakePolls as poll, idx}
							<PollCard {poll} variant={idx % 2 === 0 ? 'green' : 'pink'} />
						{/each}
					</div>
					<div class="row">
						{#each [...fakePolls].reverse() as poll, idx}
							<PollCard {poll} variant={idx % 2 === 1 ? 'green' : 'pink'} />
						{/each}
					</div>
				</div>
			</div>
		</BentoCard>
		<BentoCard title={post.title} description={post.summary} gridArea="3 / 3 / 4 / 4" />
	{/each}
</BentoGrid>

<Footer />

<style lang="scss">
	.preview {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		width: 70%;

		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;

		overflow: hidden;
	}

	.polls-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.5rem;

		transform: rotate(-15deg) scale(0.9);

		margin-left: 1.5rem;

		.row {
			display: flex;
			flex-direction: column;
			gap: 1.5rem;

			transition: transform 0.3s ease;

			&:first-child {
				transform: translateY(4rem);
			}
		}
	}

	// Hover effect
	:global(.bento-card:hover .preview) {
		.row {
			&:first-child {
				transform: translateY(0);
			}

			&:last-child {
				transform: translateY(4rem);
			}
		}
	}
</style>
