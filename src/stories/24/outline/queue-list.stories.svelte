<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import QueueListSvelte from '../../../lib/24/outline/queue-list.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: QueueListSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="QueueList" />
