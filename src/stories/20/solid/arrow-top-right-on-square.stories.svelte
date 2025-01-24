<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowTopRightOnSquareSvelte from '../../../lib/20/solid/arrow-top-right-on-square.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ArrowTopRightOnSquareSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="ArrowTopRightOnSquare" />
