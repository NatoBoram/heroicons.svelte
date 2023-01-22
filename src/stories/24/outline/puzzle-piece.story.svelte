<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { PuzzlePiece } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/PuzzlePiece" icon="heroicons:puzzle-piece">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="PuzzlePiece" icon="heroicons:puzzle-piece">
		<PuzzlePiece class={className} />
	</Hst.Variant>
</Hst.Story>
