<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ChatBubbleLeft } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/ChatBubbleLeft" icon="heroicons:chat-bubble-left">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ChatBubbleLeft" icon="heroicons:chat-bubble-left">
		<ChatBubbleLeft class={className} />
	</Hst.Variant>
</Hst.Story>
