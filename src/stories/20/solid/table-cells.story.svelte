<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { TableCells } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/TableCells" icon="heroicons:table-cells">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="TableCells" icon="heroicons:table-cells">
		<TableCells class={className} />
	</Hst.Variant>
</Hst.Story>
