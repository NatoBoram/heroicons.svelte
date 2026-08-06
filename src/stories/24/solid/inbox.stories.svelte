<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import InboxSvelte from '../../../lib/24/solid/inbox.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: InboxSvelte,
		args: { class: '' },
	})
</script>

<Story name="Inbox" />
