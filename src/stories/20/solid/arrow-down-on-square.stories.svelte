<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowDownOnSquareSvelte from '../../../lib/20/solid/arrow-down-on-square.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ArrowDownOnSquareSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowDownOnSquare" />
