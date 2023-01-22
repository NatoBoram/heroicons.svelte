<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { PencilSquare } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/PencilSquare" icon="heroicons:pencil-square">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="PencilSquare" icon="heroicons:pencil-square">
		<PencilSquare class={className} />
	</Hst.Variant>
</Hst.Story>
