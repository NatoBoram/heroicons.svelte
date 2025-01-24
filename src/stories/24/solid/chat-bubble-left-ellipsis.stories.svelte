<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChatBubbleLeftEllipsisSvelte from '../../../lib/24/solid/chat-bubble-left-ellipsis.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ChatBubbleLeftEllipsisSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ChatBubbleLeftEllipsis" />
