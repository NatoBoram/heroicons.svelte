<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChatBubbleBottomCenterSvelte from '../../../lib/24/outline/chat-bubble-bottom-center.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ChatBubbleBottomCenterSvelte,
		args: { class: '' },
	})
</script>

<Story name="ChatBubbleBottomCenter" />
