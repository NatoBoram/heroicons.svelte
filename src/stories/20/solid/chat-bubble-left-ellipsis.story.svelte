<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ChatBubbleLeftEllipsis } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/ChatBubbleLeftEllipsis" icon="heroicons:chat-bubble-left-ellipsis">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ChatBubbleLeftEllipsis" icon="heroicons:chat-bubble-left-ellipsis">
		<ChatBubbleLeftEllipsis class={className} />
	</Hst.Variant>
</Hst.Story>
