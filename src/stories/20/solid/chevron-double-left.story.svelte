<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ChevronDoubleLeft } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/ChevronDoubleLeft" icon="heroicons:chevron-double-left">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ChevronDoubleLeft" icon="heroicons:chevron-double-left">
		<ChevronDoubleLeft class={className} />
	</Hst.Variant>
</Hst.Story>
