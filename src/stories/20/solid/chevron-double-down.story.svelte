<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ChevronDoubleDown } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/ChevronDoubleDown" icon="heroicons:chevron-double-down">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ChevronDoubleDown" icon="heroicons:chevron-double-down">
		<ChevronDoubleDown class={className} />
	</Hst.Variant>
</Hst.Story>
