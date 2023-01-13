<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { PaintBrush } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/PaintBrush" icon="heroicons:paint-brush">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="PaintBrush" icon="heroicons:paint-brush">
		<PaintBrush class={className} />
	</Hst.Variant>
</Hst.Story>
