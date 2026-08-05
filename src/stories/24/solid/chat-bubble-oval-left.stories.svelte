<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChatBubbleOvalLeftSvelte from '../../../lib/24/solid/chat-bubble-oval-left.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ChatBubbleOvalLeftSvelte,
		args: { class: '' },
	})
</script>

<Story name="ChatBubbleOvalLeft" />
