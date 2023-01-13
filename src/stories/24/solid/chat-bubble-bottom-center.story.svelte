<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ChatBubbleBottomCenter } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/ChatBubbleBottomCenter" icon="heroicons:chat-bubble-bottom-center">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ChatBubbleBottomCenter" icon="heroicons:chat-bubble-bottom-center">
		<ChatBubbleBottomCenter class={className} />
	</Hst.Variant>
</Hst.Story>
