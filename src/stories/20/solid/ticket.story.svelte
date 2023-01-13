<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Ticket } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/Ticket" icon="heroicons:ticket">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Ticket" icon="heroicons:ticket">
		<Ticket class={className} />
	</Hst.Variant>
</Hst.Story>
