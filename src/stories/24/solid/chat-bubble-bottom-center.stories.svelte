<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChatBubbleBottomCenterSvelte from '../../../lib/24/solid/chat-bubble-bottom-center.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ChatBubbleBottomCenterSvelte,
		args: { class: '' },
	})
</script>

<Story name="ChatBubbleBottomCenter" />
