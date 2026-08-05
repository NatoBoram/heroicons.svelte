<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import InboxSvelte from '../../../lib/20/solid/inbox.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: InboxSvelte,
		args: { class: '' },
	})
</script>

<Story name="Inbox" />
