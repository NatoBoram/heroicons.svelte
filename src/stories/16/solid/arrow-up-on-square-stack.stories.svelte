<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowUpOnSquareStackSvelte from '../../../lib/16/solid/arrow-up-on-square-stack.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ArrowUpOnSquareStackSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ArrowUpOnSquareStack" />
