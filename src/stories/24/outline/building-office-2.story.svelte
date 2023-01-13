<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { BuildingOffice2 } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/BuildingOffice2" icon="heroicons:building-office-2">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="BuildingOffice2" icon="heroicons:building-office-2">
		<BuildingOffice2 class={className} />
	</Hst.Variant>
</Hst.Story>
