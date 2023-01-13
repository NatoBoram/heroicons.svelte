<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ChatBubbleLeftRight } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/ChatBubbleLeftRight" icon="heroicons:chat-bubble-left-right">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ChatBubbleLeftRight" icon="heroicons:chat-bubble-left-right">
		<ChatBubbleLeftRight class={className} />
	</Hst.Variant>
</Hst.Story>
