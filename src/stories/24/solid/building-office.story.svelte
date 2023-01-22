<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { BuildingOffice } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/BuildingOffice" icon="heroicons:building-office">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="BuildingOffice" icon="heroicons:building-office">
		<BuildingOffice class={className} />
	</Hst.Variant>
</Hst.Story>
