<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import InboxSvelte from '../../../lib/16/solid/inbox.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: InboxSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Inbox" />
