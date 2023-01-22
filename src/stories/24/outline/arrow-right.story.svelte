<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ArrowRight } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/ArrowRight" icon="heroicons:arrow-right">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ArrowRight" icon="heroicons:arrow-right">
		<ArrowRight class={className} />
	</Hst.Variant>
</Hst.Story>
