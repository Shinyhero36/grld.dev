<script lang="ts">
	import type { Poll } from '$lib/components/Poll/types';
	import PollCard from '$lib/components/Poll/PollCard.svelte';

	const poll1: Poll = {
		author: 'Gérald',
		endIn: new Date('2024-12-31'),
		question: 'Me cosplaying Shadow the Hedgehog for Sonic 3 the movie?',
		votes: 12
	};

	const poll2: Poll = {
		author: 'John Doe',
		endIn: new Date('2024-12-31'),
		question: 'What is your favorite color?',
		votes: 42
	};
</script>

<div class="preview">
	<div class="poll1">
		<PollCard poll={poll1} variant="green" />
	</div>
	<div class="poll2">
		<PollCard poll={poll2} variant="pink" />
	</div>
</div>

<style lang="scss">
	.preview {
		position: relative;
	}

	.poll1 {
		user-select: none;

		position: absolute;
		transform: translate(10%, 25%) rotate(-10deg);
		max-width: 300px;
		width: 100%;
	}

	.poll2 {
		position: absolute;
		transform: translate(calc(10% + 25px), calc(25% + 65px)) rotate(-5deg);
		max-width: 300px;
		width: 100%;
	}
</style>
