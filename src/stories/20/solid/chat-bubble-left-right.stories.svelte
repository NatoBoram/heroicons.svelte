<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChatBubbleLeftRightSvelte from '../../../lib/20/solid/chat-bubble-left-right.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ChatBubbleLeftRightSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="ChatBubbleLeftRight" />
