<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { AdjustmentsHorizontal } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/AdjustmentsHorizontal" icon="heroicons:adjustments-horizontal">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="AdjustmentsHorizontal" icon="heroicons:adjustments-horizontal">
		<AdjustmentsHorizontal class={className} />
	</Hst.Variant>
</Hst.Story>
