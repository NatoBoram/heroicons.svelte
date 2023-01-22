<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { MagnifyingGlassPlus } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/MagnifyingGlassPlus" icon="heroicons:magnifying-glass-plus">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="MagnifyingGlassPlus" icon="heroicons:magnifying-glass-plus">
		<MagnifyingGlassPlus class={className} />
	</Hst.Variant>
</Hst.Story>
