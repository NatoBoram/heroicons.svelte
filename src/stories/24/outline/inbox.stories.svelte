<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import InboxSvelte from '../../../lib/24/outline/inbox.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: InboxSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Inbox" />
