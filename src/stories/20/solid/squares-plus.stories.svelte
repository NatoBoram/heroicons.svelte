<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import SquaresPlusSvelte from '../../../lib/20/solid/squares-plus.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: SquaresPlusSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="SquaresPlus" />
