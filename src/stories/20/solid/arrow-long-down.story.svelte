<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ArrowLongDown } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/ArrowLongDown" icon="heroicons:arrow-long-down">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ArrowLongDown" icon="heroicons:arrow-long-down">
		<ArrowLongDown class={className} />
	</Hst.Variant>
</Hst.Story>
