<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChatBubbleBottomCenterTextSvelte from '../../../lib/20/solid/chat-bubble-bottom-center-text.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ChatBubbleBottomCenterTextSvelte,
		args: { class: '' },
	})
</script>

<Story name="ChatBubbleBottomCenterText" />
