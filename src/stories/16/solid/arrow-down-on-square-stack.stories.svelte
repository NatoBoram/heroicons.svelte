<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowDownOnSquareStackSvelte from '../../../lib/16/solid/arrow-down-on-square-stack.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ArrowDownOnSquareStackSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowDownOnSquareStack" />
