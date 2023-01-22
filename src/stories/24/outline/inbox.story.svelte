<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Inbox } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/Inbox" icon="heroicons:inbox">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Inbox" icon="heroicons:inbox">
		<Inbox class={className} />
	</Hst.Variant>
</Hst.Story>
