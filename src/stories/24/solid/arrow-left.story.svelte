<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ArrowLeft } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/ArrowLeft" icon="heroicons:arrow-left">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ArrowLeft" icon="heroicons:arrow-left">
		<ArrowLeft class={className} />
	</Hst.Variant>
</Hst.Story>
