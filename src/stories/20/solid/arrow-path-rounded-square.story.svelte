<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ArrowPathRoundedSquare } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/ArrowPathRoundedSquare" icon="heroicons:arrow-path-rounded-square">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ArrowPathRoundedSquare" icon="heroicons:arrow-path-rounded-square">
		<ArrowPathRoundedSquare class={className} />
	</Hst.Variant>
</Hst.Story>
