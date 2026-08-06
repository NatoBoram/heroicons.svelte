<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PuzzlePieceSvelte from '../../../lib/24/solid/puzzle-piece.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: PuzzlePieceSvelte,
		args: { class: '' },
	})
</script>

<Story name="PuzzlePiece" />
