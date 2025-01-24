<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowPathRoundedSquareSvelte from '../../../lib/20/solid/arrow-path-rounded-square.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ArrowPathRoundedSquareSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="ArrowPathRoundedSquare" />
