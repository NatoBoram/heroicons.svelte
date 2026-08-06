<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChatBubbleOvalLeftEllipsisSvelte from '../../../lib/20/solid/chat-bubble-oval-left-ellipsis.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ChatBubbleOvalLeftEllipsisSvelte,
		args: { class: '' },
	})
</script>

<Story name="ChatBubbleOvalLeftEllipsis" />
