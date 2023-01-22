<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ArrowUpOnSquare } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/ArrowUpOnSquare" icon="heroicons:arrow-up-on-square">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ArrowUpOnSquare" icon="heroicons:arrow-up-on-square">
		<ArrowUpOnSquare class={className} />
	</Hst.Variant>
</Hst.Story>
