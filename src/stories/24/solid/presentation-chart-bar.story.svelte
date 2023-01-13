<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { PresentationChartBar } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/PresentationChartBar" icon="heroicons:presentation-chart-bar">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="PresentationChartBar" icon="heroicons:presentation-chart-bar">
		<PresentationChartBar class={className} />
	</Hst.Variant>
</Hst.Story>
