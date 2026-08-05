<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChatBubbleLeftEllipsisSvelte from '../../../lib/24/outline/chat-bubble-left-ellipsis.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ChatBubbleLeftEllipsisSvelte,
		args: { class: '' },
	})
</script>

<Story name="ChatBubbleLeftEllipsis" />
