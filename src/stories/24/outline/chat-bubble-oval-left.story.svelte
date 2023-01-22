<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ChatBubbleOvalLeft } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/ChatBubbleOvalLeft" icon="heroicons:chat-bubble-oval-left">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ChatBubbleOvalLeft" icon="heroicons:chat-bubble-oval-left">
		<ChatBubbleOvalLeft class={className} />
	</Hst.Variant>
</Hst.Story>
