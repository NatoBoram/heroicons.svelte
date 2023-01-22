<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ArrowTopRightOnSquare } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/ArrowTopRightOnSquare" icon="heroicons:arrow-top-right-on-square">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ArrowTopRightOnSquare" icon="heroicons:arrow-top-right-on-square">
		<ArrowTopRightOnSquare class={className} />
	</Hst.Variant>
</Hst.Story>
