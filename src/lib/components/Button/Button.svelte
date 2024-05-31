<script lang="ts">
	import { Button, builderActions, getAttrs, type Builder } from 'bits-ui';
	import './Button.scss';

	interface Props {
		variant?: 'neutral' | 'neutral-ghost';
		icon?: boolean;

		builders?: Builder[];

		type?: HTMLButtonElement['type'];
		href?: string;
		disabled?: boolean;
		form?: string;
		inline?: boolean;
		onclick?: (event: MouseEvent) => void;

		children: any;
	}

	const {
		variant = 'neutral',
		icon = false,
		builders = [],
		type = 'button',
		href = '',
		disabled = false,
		form,
		inline = false,
		onclick,
		children,
		...rest
	}: Props = $props();
</script>

{#if href && !disabled}
	<Button.Root
		{href}
		class="button {variant} {inline ? 'inline' : ''} {icon ? 'icon' : ''}"
		{...rest}
	>
		{@render children()}
	</Button.Root>
{:else}
	<button
		use:builderActions={{ builders }}
		{...getAttrs(builders)}
		{onclick}
		class="button {variant}"
		class:inline
		class:icon
		{form}
		{disabled}
		{type}
		{...rest}
	>
		{@render children()}
	</button>
{/if}
