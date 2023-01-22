<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { TableCells } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/TableCells" icon="heroicons:table-cells">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="TableCells" icon="heroicons:table-cells">
		<TableCells class={className} />
	</Hst.Variant>
</Hst.Story>
