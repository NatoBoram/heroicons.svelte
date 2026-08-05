<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowDownOnSquareSvelte from '../../../lib/16/solid/arrow-down-on-square.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ArrowDownOnSquareSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowDownOnSquare" />
