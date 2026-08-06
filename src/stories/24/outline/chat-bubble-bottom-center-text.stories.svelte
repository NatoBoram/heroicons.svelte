<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChatBubbleBottomCenterTextSvelte from '../../../lib/24/outline/chat-bubble-bottom-center-text.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ChatBubbleBottomCenterTextSvelte,
		args: { class: '' },
	})
</script>

<Story name="ChatBubbleBottomCenterText" />
