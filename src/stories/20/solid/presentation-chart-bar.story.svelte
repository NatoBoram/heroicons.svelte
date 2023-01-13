<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { PresentationChartBar } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/PresentationChartBar" icon="heroicons:presentation-chart-bar">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="PresentationChartBar" icon="heroicons:presentation-chart-bar">
		<PresentationChartBar class={className} />
	</Hst.Variant>
</Hst.Story>
