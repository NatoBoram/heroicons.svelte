<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ArrowDownLeft } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/ArrowDownLeft" icon="heroicons:arrow-down-left">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ArrowDownLeft" icon="heroicons:arrow-down-left">
		<ArrowDownLeft class={className} />
	</Hst.Variant>
</Hst.Story>
