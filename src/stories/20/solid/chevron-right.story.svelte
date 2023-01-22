<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ChevronRight } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/ChevronRight" icon="heroicons:chevron-right">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ChevronRight" icon="heroicons:chevron-right">
		<ChevronRight class={className} />
	</Hst.Variant>
</Hst.Story>
