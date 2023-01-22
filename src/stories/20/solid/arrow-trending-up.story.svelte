<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ArrowTrendingUp } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/ArrowTrendingUp" icon="heroicons:arrow-trending-up">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ArrowTrendingUp" icon="heroicons:arrow-trending-up">
		<ArrowTrendingUp class={className} />
	</Hst.Variant>
</Hst.Story>
