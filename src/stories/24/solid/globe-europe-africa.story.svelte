<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { GlobeEuropeAfrica } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/GlobeEuropeAfrica" icon="heroicons:globe-europe-africa">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="GlobeEuropeAfrica" icon="heroicons:globe-europe-africa">
		<GlobeEuropeAfrica class={className} />
	</Hst.Variant>
</Hst.Story>
