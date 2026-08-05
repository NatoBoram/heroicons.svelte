<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PuzzlePieceSvelte from '../../../lib/20/solid/puzzle-piece.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: PuzzlePieceSvelte,
		args: { class: '' },
	})
</script>

<Story name="PuzzlePiece" />
