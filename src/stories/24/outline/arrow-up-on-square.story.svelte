<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ArrowUpOnSquare } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/ArrowUpOnSquare" icon="heroicons:arrow-up-on-square">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ArrowUpOnSquare" icon="heroicons:arrow-up-on-square">
		<ArrowUpOnSquare class={className} />
	</Hst.Variant>
</Hst.Story>
