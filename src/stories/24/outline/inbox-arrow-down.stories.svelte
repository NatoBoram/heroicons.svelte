<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import InboxArrowDownSvelte from '../../../lib/24/outline/inbox-arrow-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: InboxArrowDownSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="InboxArrowDown" />
