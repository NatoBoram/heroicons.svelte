<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowTopRightOnSquareSvelte from '../../../lib/24/solid/arrow-top-right-on-square.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ArrowTopRightOnSquareSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowTopRightOnSquare" />
