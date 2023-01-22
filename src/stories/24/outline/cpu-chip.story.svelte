<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { CpuChip } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/CpuChip" icon="heroicons:cpu-chip">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="CpuChip" icon="heroicons:cpu-chip">
		<CpuChip class={className} />
	</Hst.Variant>
</Hst.Story>
