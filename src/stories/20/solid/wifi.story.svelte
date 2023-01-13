<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Wifi } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/Wifi" icon="heroicons:wifi">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Wifi" icon="heroicons:wifi">
		<Wifi class={className} />
	</Hst.Variant>
</Hst.Story>
