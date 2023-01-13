<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ChevronDoubleRight } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/ChevronDoubleRight" icon="heroicons:chevron-double-right">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ChevronDoubleRight" icon="heroicons:chevron-double-right">
		<ChevronDoubleRight class={className} />
	</Hst.Variant>
</Hst.Story>
