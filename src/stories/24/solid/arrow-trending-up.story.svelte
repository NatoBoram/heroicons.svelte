<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ArrowTrendingUp } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/ArrowTrendingUp" icon="heroicons:arrow-trending-up">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ArrowTrendingUp" icon="heroicons:arrow-trending-up">
		<ArrowTrendingUp class={className} />
	</Hst.Variant>
</Hst.Story>
