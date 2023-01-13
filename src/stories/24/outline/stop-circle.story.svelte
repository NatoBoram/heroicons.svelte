<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { StopCircle } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/StopCircle" icon="heroicons:stop-circle">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="StopCircle" icon="heroicons:stop-circle">
		<StopCircle class={className} />
	</Hst.Variant>
</Hst.Story>
