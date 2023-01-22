<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ServerStack } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/ServerStack" icon="heroicons:server-stack">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ServerStack" icon="heroicons:server-stack">
		<ServerStack class={className} />
	</Hst.Variant>
</Hst.Story>
