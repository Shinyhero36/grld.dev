<script lang="ts">
	import CheckCircle from 'phosphor-svelte/lib/CheckCircle';
	import ClockCountdown from 'phosphor-svelte/lib/ClockCountdown';

	import type { Poll } from './types';

	interface Props {
		poll: Poll;
		variant: 'pink' | 'green';
	}

	const { poll, variant }: Props = $props();

	const formatDate = (date: Date) => {
		return date.toLocaleDateString('en-US', {
			month: 'short',
			day: 'numeric',
			year: 'numeric'
		});
	};
</script>

<div class="poll-card {variant}">
	<div class="author text-sm">
		<img src="https://api.dicebear.com/8.x/micah/svg?seed={poll.author}" alt="Avatar" />
		<span>{poll.author}</span>
	</div>
	<p class="question">{poll.question}</p>
	<div class="info text-sm">
		<div class="stat">
			<CheckCircle width={16} height={16} />
			<span>{poll.votes} votes</span>
		</div>
		<div class="stat">
			<ClockCountdown width={16} height={16} />
			<span>{formatDate(poll.endIn)}</span>
		</div>
	</div>
</div>

<style lang="scss">
	.poll-card {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-md);

		border: 2px solid black;
		border-radius: var(--rounded-2xl);

		padding: var(--spacing-lg);
	}

	:global(.poll-card.green) {
		background-color: #d0e4d3;
		border-color: #b4cab8;
	}

	:global(.poll-card.pink) {
		background-color: #e1d9ff;
		border-color: #d0c3fd;
	}

	.author {
		display: flex;
		align-items: center;
		gap: var(--spacing-md);

		& > img {
			border-radius: var(--rounded-full);
			aspect-ratio: 1/1;
			width: var(--spacing-3xl);
		}
	}

	.info {
		display: flex;
		align-items: center;
		gap: var(--spacing-lg);
	}

	.stat {
		display: flex;
		align-items: center;
		gap: var(--spacing-xs);
	}
</style>
