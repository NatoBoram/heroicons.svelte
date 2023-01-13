<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ArrowLongRight } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/ArrowLongRight" icon="heroicons:arrow-long-right">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ArrowLongRight" icon="heroicons:arrow-long-right">
		<ArrowLongRight class={className} />
	</Hst.Variant>
</Hst.Story>
