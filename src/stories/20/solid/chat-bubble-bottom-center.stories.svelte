<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChatBubbleBottomCenterSvelte from '../../../lib/20/solid/chat-bubble-bottom-center.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ChatBubbleBottomCenterSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="ChatBubbleBottomCenter" />
