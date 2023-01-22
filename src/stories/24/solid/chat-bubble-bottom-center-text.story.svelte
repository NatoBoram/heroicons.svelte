<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ChatBubbleBottomCenterText } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/ChatBubbleBottomCenterText" icon="heroicons:chat-bubble-bottom-center-text">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ChatBubbleBottomCenterText" icon="heroicons:chat-bubble-bottom-center-text">
		<ChatBubbleBottomCenterText class={className} />
	</Hst.Variant>
</Hst.Story>
