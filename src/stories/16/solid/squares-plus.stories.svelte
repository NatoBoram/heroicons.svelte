<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import SquaresPlusSvelte from '../../../lib/16/solid/squares-plus.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: SquaresPlusSvelte,
		args: { class: '' },
	})
</script>

<Story name="SquaresPlus" />
