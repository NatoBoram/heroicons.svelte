<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChatBubbleLeftEllipsisSvelte from '../../../lib/24/solid/chat-bubble-left-ellipsis.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ChatBubbleLeftEllipsisSvelte,
		args: { class: '' },
	})
</script>

<Story name="ChatBubbleLeftEllipsis" />
