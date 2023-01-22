<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { InboxArrowDown } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/InboxArrowDown" icon="heroicons:inbox-arrow-down">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="InboxArrowDown" icon="heroicons:inbox-arrow-down">
		<InboxArrowDown class={className} />
	</Hst.Variant>
</Hst.Story>
