<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ArrowDownOnSquare } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/ArrowDownOnSquare" icon="heroicons:arrow-down-on-square">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ArrowDownOnSquare" icon="heroicons:arrow-down-on-square">
		<ArrowDownOnSquare class={className} />
	</Hst.Variant>
</Hst.Story>
