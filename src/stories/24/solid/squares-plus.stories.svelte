<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import SquaresPlusSvelte from '../../../lib/24/solid/squares-plus.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: SquaresPlusSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="SquaresPlus" />
