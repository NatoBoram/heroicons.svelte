<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChatBubbleOvalLeftSvelte from '../../../lib/24/outline/chat-bubble-oval-left.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ChatBubbleOvalLeftSvelte,
		args: { class: '' },
	})
</script>

<Story name="ChatBubbleOvalLeft" />
