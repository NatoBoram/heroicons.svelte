<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { AdjustmentsVertical } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/AdjustmentsVertical" icon="heroicons:adjustments-vertical">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="AdjustmentsVertical" icon="heroicons:adjustments-vertical">
		<AdjustmentsVertical class={className} />
	</Hst.Variant>
</Hst.Story>
