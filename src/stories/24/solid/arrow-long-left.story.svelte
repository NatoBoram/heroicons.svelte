<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ArrowLongLeft } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/ArrowLongLeft" icon="heroicons:arrow-long-left">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ArrowLongLeft" icon="heroicons:arrow-long-left">
		<ArrowLongLeft class={className} />
	</Hst.Variant>
</Hst.Story>
