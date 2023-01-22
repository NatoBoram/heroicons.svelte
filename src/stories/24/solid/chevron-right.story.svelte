<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ChevronRight } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/ChevronRight" icon="heroicons:chevron-right">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ChevronRight" icon="heroicons:chevron-right">
		<ChevronRight class={className} />
	</Hst.Variant>
</Hst.Story>
