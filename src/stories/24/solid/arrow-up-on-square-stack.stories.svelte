<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowUpOnSquareStackSvelte from '../../../lib/24/solid/arrow-up-on-square-stack.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ArrowUpOnSquareStackSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowUpOnSquareStack" />
