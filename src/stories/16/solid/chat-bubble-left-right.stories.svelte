<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChatBubbleLeftRightSvelte from '../../../lib/16/solid/chat-bubble-left-right.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ChatBubbleLeftRightSvelte,
		args: { class: '' },
	})
</script>

<Story name="ChatBubbleLeftRight" />
