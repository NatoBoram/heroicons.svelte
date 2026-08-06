<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PuzzlePieceSvelte from '../../../lib/24/outline/puzzle-piece.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: PuzzlePieceSvelte,
		args: { class: '' },
	})
</script>

<Story name="PuzzlePiece" />
