<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowUpOnSquareSvelte from '../../../lib/24/solid/arrow-up-on-square.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ArrowUpOnSquareSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowUpOnSquare" />
