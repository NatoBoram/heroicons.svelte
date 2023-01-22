<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Gift } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/Gift" icon="heroicons:gift">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Gift" icon="heroicons:gift">
		<Gift class={className} />
	</Hst.Variant>
</Hst.Story>
