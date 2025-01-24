<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChatBubbleOvalLeftEllipsisSvelte from '../../../lib/24/solid/chat-bubble-oval-left-ellipsis.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ChatBubbleOvalLeftEllipsisSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ChatBubbleOvalLeftEllipsis" />
