<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowUpOnSquareStackSvelte from '../../../lib/20/solid/arrow-up-on-square-stack.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ArrowUpOnSquareStackSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="ArrowUpOnSquareStack" />
