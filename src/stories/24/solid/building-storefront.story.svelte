<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { BuildingStorefront } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/BuildingStorefront" icon="heroicons:building-storefront">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="BuildingStorefront" icon="heroicons:building-storefront">
		<BuildingStorefront class={className} />
	</Hst.Variant>
</Hst.Story>
