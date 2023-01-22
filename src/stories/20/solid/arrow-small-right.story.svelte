<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ArrowSmallRight } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/ArrowSmallRight" icon="heroicons:arrow-small-right">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ArrowSmallRight" icon="heroicons:arrow-small-right">
		<ArrowSmallRight class={className} />
	</Hst.Variant>
</Hst.Story>
