<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowDownOnSquareStackSvelte from '../../../lib/24/outline/arrow-down-on-square-stack.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ArrowDownOnSquareStackSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowDownOnSquareStack" />
