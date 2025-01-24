<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowUpOnSquareSvelte from '../../../lib/20/solid/arrow-up-on-square.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ArrowUpOnSquareSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="ArrowUpOnSquare" />
