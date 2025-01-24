<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChatBubbleOvalLeftSvelte from '../../../lib/20/solid/chat-bubble-oval-left.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ChatBubbleOvalLeftSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="ChatBubbleOvalLeft" />
