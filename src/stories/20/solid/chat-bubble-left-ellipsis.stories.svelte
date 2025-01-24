<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChatBubbleLeftEllipsisSvelte from '../../../lib/20/solid/chat-bubble-left-ellipsis.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ChatBubbleLeftEllipsisSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="ChatBubbleLeftEllipsis" />
