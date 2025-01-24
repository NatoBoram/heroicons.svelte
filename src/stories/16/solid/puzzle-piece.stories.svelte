<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PuzzlePieceSvelte from '../../../lib/16/solid/puzzle-piece.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: PuzzlePieceSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="PuzzlePiece" />
