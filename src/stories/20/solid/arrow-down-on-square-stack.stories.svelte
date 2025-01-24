<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowDownOnSquareStackSvelte from '../../../lib/20/solid/arrow-down-on-square-stack.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ArrowDownOnSquareStackSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="ArrowDownOnSquareStack" />
