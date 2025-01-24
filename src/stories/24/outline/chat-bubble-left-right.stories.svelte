<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChatBubbleLeftRightSvelte from '../../../lib/24/outline/chat-bubble-left-right.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ChatBubbleLeftRightSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ChatBubbleLeftRight" />
