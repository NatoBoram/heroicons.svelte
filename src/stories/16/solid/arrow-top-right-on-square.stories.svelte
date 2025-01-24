<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowTopRightOnSquareSvelte from '../../../lib/16/solid/arrow-top-right-on-square.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ArrowTopRightOnSquareSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ArrowTopRightOnSquare" />
