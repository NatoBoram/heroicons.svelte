<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChatBubbleLeftSvelte from '../../../lib/20/solid/chat-bubble-left.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ChatBubbleLeftSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="ChatBubbleLeft" />
