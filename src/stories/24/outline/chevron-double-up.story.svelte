<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ChevronDoubleUp } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/ChevronDoubleUp" icon="heroicons:chevron-double-up">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ChevronDoubleUp" icon="heroicons:chevron-double-up">
		<ChevronDoubleUp class={className} />
	</Hst.Variant>
</Hst.Story>
