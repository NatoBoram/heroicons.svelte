<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { InboxStack } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/InboxStack" icon="heroicons:inbox-stack">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="InboxStack" icon="heroicons:inbox-stack">
		<InboxStack class={className} />
	</Hst.Variant>
</Hst.Story>
