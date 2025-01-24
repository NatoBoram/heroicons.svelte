<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChatBubbleLeftSvelte from '../../../lib/16/solid/chat-bubble-left.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ChatBubbleLeftSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ChatBubbleLeft" />
