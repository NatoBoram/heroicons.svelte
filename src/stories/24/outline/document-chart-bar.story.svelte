<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { DocumentChartBar } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/DocumentChartBar" icon="heroicons:document-chart-bar">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="DocumentChartBar" icon="heroicons:document-chart-bar">
		<DocumentChartBar class={className} />
	</Hst.Variant>
</Hst.Story>
