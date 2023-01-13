<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ChatBubbleOvalLeft } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/ChatBubbleOvalLeft" icon="heroicons:chat-bubble-oval-left">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ChatBubbleOvalLeft" icon="heroicons:chat-bubble-oval-left">
		<ChatBubbleOvalLeft class={className} />
	</Hst.Variant>
</Hst.Story>
