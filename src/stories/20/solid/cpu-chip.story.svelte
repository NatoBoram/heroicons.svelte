<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { CpuChip } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/CpuChip" icon="heroicons:cpu-chip">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="CpuChip" icon="heroicons:cpu-chip">
		<CpuChip class={className} />
	</Hst.Variant>
</Hst.Story>
