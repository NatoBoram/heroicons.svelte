<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import InboxArrowDownSvelte from '../../../lib/16/solid/inbox-arrow-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: InboxArrowDownSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="InboxArrowDown" />
