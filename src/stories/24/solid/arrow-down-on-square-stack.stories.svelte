<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowDownOnSquareStackSvelte from '../../../lib/24/solid/arrow-down-on-square-stack.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ArrowDownOnSquareStackSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowDownOnSquareStack" />
