<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ChatBubbleBottomCenterText } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story
	title="Outline/ChatBubbleBottomCenterText"
	icon="heroicons:chat-bubble-bottom-center-text"
>
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ChatBubbleBottomCenterText" icon="heroicons:chat-bubble-bottom-center-text">
		<ChatBubbleBottomCenterText class={className} />
	</Hst.Variant>
</Hst.Story>
