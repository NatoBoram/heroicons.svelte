<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { AdjustmentsVertical } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/AdjustmentsVertical" icon="heroicons:adjustments-vertical">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="AdjustmentsVertical" icon="heroicons:adjustments-vertical">
		<AdjustmentsVertical class={className} />
	</Hst.Variant>
</Hst.Story>
