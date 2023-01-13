<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { GlobeAmericas } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/GlobeAmericas" icon="heroicons:globe-americas">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="GlobeAmericas" icon="heroicons:globe-americas">
		<GlobeAmericas class={className} />
	</Hst.Variant>
</Hst.Story>
