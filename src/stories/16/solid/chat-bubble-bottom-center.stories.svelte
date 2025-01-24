<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChatBubbleBottomCenterSvelte from '../../../lib/16/solid/chat-bubble-bottom-center.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ChatBubbleBottomCenterSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ChatBubbleBottomCenter" />
