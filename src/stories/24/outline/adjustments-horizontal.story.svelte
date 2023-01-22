<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { AdjustmentsHorizontal } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/AdjustmentsHorizontal" icon="heroicons:adjustments-horizontal">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="AdjustmentsHorizontal" icon="heroicons:adjustments-horizontal">
		<AdjustmentsHorizontal class={className} />
	</Hst.Variant>
</Hst.Story>
