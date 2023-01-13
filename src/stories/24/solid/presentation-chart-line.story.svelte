<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { PresentationChartLine } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/PresentationChartLine" icon="heroicons:presentation-chart-line">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="PresentationChartLine" icon="heroicons:presentation-chart-line">
		<PresentationChartLine class={className} />
	</Hst.Variant>
</Hst.Story>
