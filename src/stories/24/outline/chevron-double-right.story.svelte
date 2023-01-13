<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ChevronDoubleRight } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/ChevronDoubleRight" icon="heroicons:chevron-double-right">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ChevronDoubleRight" icon="heroicons:chevron-double-right">
		<ChevronDoubleRight class={className} />
	</Hst.Variant>
</Hst.Story>
