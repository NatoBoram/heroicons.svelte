<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { GlobeAlt } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/GlobeAlt" icon="heroicons:globe-alt">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="GlobeAlt" icon="heroicons:globe-alt">
		<GlobeAlt class={className} />
	</Hst.Variant>
</Hst.Story>
