<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ChatBubbleOvalLeftEllipsis } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story
	title="Outline/ChatBubbleOvalLeftEllipsis"
	icon="heroicons:chat-bubble-oval-left-ellipsis"
>
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ChatBubbleOvalLeftEllipsis" icon="heroicons:chat-bubble-oval-left-ellipsis">
		<ChatBubbleOvalLeftEllipsis class={className} />
	</Hst.Variant>
</Hst.Story>
