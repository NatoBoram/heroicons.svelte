<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { GlobeAsiaAustralia } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/GlobeAsiaAustralia" icon="heroicons:globe-asia-australia">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="GlobeAsiaAustralia" icon="heroicons:globe-asia-australia">
		<GlobeAsiaAustralia class={className} />
	</Hst.Variant>
</Hst.Story>
