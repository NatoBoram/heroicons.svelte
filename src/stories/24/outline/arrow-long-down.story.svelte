<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ArrowLongDown } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/ArrowLongDown" icon="heroicons:arrow-long-down">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ArrowLongDown" icon="heroicons:arrow-long-down">
		<ArrowLongDown class={className} />
	</Hst.Variant>
</Hst.Story>
