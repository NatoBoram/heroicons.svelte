<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ChevronDoubleLeft } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/ChevronDoubleLeft" icon="heroicons:chevron-double-left">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ChevronDoubleLeft" icon="heroicons:chevron-double-left">
		<ChevronDoubleLeft class={className} />
	</Hst.Variant>
</Hst.Story>
