<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { PresentationChartLine } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/PresentationChartLine" icon="heroicons:presentation-chart-line">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="PresentationChartLine" icon="heroicons:presentation-chart-line">
		<PresentationChartLine class={className} />
	</Hst.Variant>
</Hst.Story>
