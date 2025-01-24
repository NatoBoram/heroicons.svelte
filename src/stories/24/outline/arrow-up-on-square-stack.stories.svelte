<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowUpOnSquareStackSvelte from '../../../lib/24/outline/arrow-up-on-square-stack.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ArrowUpOnSquareStackSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ArrowUpOnSquareStack" />
