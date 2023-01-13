<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { GlobeEuropeAfrica } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/GlobeEuropeAfrica" icon="heroicons:globe-europe-africa">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="GlobeEuropeAfrica" icon="heroicons:globe-europe-africa">
		<GlobeEuropeAfrica class={className} />
	</Hst.Variant>
</Hst.Story>
