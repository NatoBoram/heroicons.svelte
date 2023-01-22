<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { StopCircle } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/StopCircle" icon="heroicons:stop-circle">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="StopCircle" icon="heroicons:stop-circle">
		<StopCircle class={className} />
	</Hst.Variant>
</Hst.Story>
