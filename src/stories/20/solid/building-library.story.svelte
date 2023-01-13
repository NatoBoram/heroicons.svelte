<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { BuildingLibrary } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/BuildingLibrary" icon="heroicons:building-library">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="BuildingLibrary" icon="heroicons:building-library">
		<BuildingLibrary class={className} />
	</Hst.Variant>
</Hst.Story>
