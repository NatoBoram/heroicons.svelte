<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChatBubbleOvalLeftEllipsisSvelte from '../../../lib/24/outline/chat-bubble-oval-left-ellipsis.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ChatBubbleOvalLeftEllipsisSvelte,
		args: { class: '' },
	})
</script>

<Story name="ChatBubbleOvalLeftEllipsis" />
