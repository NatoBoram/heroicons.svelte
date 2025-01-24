<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChatBubbleLeftSvelte from '../../../lib/24/outline/chat-bubble-left.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ChatBubbleLeftSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ChatBubbleLeft" />
