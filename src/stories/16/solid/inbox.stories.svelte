<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import InboxSvelte from '../../../lib/16/solid/inbox.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: InboxSvelte,
		args: { class: '' },
	})
</script>

<Story name="Inbox" />
