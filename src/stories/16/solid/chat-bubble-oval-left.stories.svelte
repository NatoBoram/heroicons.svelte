<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChatBubbleOvalLeftSvelte from '../../../lib/16/solid/chat-bubble-oval-left.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ChatBubbleOvalLeftSvelte,
		args: { class: '' },
	})
</script>

<Story name="ChatBubbleOvalLeft" />
