<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChatBubbleLeftEllipsisSvelte from '../../../lib/16/solid/chat-bubble-left-ellipsis.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ChatBubbleLeftEllipsisSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ChatBubbleLeftEllipsis" />
