<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChatBubbleOvalLeftEllipsisSvelte from '../../../lib/16/solid/chat-bubble-oval-left-ellipsis.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ChatBubbleOvalLeftEllipsisSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ChatBubbleOvalLeftEllipsis" />
