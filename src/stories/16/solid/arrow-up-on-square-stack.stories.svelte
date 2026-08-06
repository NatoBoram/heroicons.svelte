<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowUpOnSquareStackSvelte from '../../../lib/16/solid/arrow-up-on-square-stack.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ArrowUpOnSquareStackSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowUpOnSquareStack" />
