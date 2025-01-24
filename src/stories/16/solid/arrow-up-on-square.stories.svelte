<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowUpOnSquareSvelte from '../../../lib/16/solid/arrow-up-on-square.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ArrowUpOnSquareSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ArrowUpOnSquare" />
