<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import SquaresPlusSvelte from '../../../lib/24/outline/squares-plus.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: SquaresPlusSvelte,
		args: { class: '' },
	})
</script>

<Story name="SquaresPlus" />
