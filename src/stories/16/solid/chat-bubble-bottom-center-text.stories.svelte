<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChatBubbleBottomCenterTextSvelte from '../../../lib/16/solid/chat-bubble-bottom-center-text.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ChatBubbleBottomCenterTextSvelte,
		args: { class: '' },
	})
</script>

<Story name="ChatBubbleBottomCenterText" />
