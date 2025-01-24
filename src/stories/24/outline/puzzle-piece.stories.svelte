<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PuzzlePieceSvelte from '../../../lib/24/outline/puzzle-piece.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: PuzzlePieceSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="PuzzlePiece" />
