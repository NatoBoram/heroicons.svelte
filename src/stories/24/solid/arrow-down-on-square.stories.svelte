<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowDownOnSquareSvelte from '../../../lib/24/solid/arrow-down-on-square.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ArrowDownOnSquareSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ArrowDownOnSquare" />
