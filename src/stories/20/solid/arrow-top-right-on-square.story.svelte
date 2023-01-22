<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ArrowTopRightOnSquare } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/ArrowTopRightOnSquare" icon="heroicons:arrow-top-right-on-square">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ArrowTopRightOnSquare" icon="heroicons:arrow-top-right-on-square">
		<ArrowTopRightOnSquare class={className} />
	</Hst.Variant>
</Hst.Story>
