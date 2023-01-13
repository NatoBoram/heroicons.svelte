<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ChartPie } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/ChartPie" icon="heroicons:chart-pie">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ChartPie" icon="heroicons:chart-pie">
		<ChartPie class={className} />
	</Hst.Variant>
</Hst.Story>
