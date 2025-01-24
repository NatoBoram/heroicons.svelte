<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import QueueListSvelte from '../../../lib/16/solid/queue-list.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: QueueListSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="QueueList" />
