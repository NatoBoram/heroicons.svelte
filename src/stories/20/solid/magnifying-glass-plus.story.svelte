<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { MagnifyingGlassPlus } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/MagnifyingGlassPlus" icon="heroicons:magnifying-glass-plus">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="MagnifyingGlassPlus" icon="heroicons:magnifying-glass-plus">
		<MagnifyingGlassPlus class={className} />
	</Hst.Variant>
</Hst.Story>
