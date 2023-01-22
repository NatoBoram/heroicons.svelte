<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ChartPie } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/ChartPie" icon="heroicons:chart-pie">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ChartPie" icon="heroicons:chart-pie">
		<ChartPie class={className} />
	</Hst.Variant>
</Hst.Story>
