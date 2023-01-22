<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ArrowSmallLeft } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/ArrowSmallLeft" icon="heroicons:arrow-small-left">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ArrowSmallLeft" icon="heroicons:arrow-small-left">
		<ArrowSmallLeft class={className} />
	</Hst.Variant>
</Hst.Story>
