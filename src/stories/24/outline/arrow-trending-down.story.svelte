<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ArrowTrendingDown } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/ArrowTrendingDown" icon="heroicons:arrow-trending-down">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ArrowTrendingDown" icon="heroicons:arrow-trending-down">
		<ArrowTrendingDown class={className} />
	</Hst.Variant>
</Hst.Story>
