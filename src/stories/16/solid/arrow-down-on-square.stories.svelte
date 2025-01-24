<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowDownOnSquareSvelte from '../../../lib/16/solid/arrow-down-on-square.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ArrowDownOnSquareSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ArrowDownOnSquare" />
