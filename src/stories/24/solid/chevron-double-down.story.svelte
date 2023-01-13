<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ChevronDoubleDown } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/ChevronDoubleDown" icon="heroicons:chevron-double-down">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ChevronDoubleDown" icon="heroicons:chevron-double-down">
		<ChevronDoubleDown class={className} />
	</Hst.Variant>
</Hst.Story>
