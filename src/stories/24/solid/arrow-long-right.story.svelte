<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ArrowLongRight } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/ArrowLongRight" icon="heroicons:arrow-long-right">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ArrowLongRight" icon="heroicons:arrow-long-right">
		<ArrowLongRight class={className} />
	</Hst.Variant>
</Hst.Story>
