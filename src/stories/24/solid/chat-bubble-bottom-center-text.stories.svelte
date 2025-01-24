<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChatBubbleBottomCenterTextSvelte from '../../../lib/24/solid/chat-bubble-bottom-center-text.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ChatBubbleBottomCenterTextSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ChatBubbleBottomCenterText" />
