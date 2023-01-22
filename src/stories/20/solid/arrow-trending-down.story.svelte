<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ArrowTrendingDown } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/ArrowTrendingDown" icon="heroicons:arrow-trending-down">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ArrowTrendingDown" icon="heroicons:arrow-trending-down">
		<ArrowTrendingDown class={className} />
	</Hst.Variant>
</Hst.Story>
