<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowDownOnSquareSvelte from '../../../lib/24/outline/arrow-down-on-square.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ArrowDownOnSquareSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowDownOnSquare" />
