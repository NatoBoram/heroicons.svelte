<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ChevronLeft } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/ChevronLeft" icon="heroicons:chevron-left">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ChevronLeft" icon="heroicons:chevron-left">
		<ChevronLeft class={className} />
	</Hst.Variant>
</Hst.Story>
