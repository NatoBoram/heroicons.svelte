<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import QueueListSvelte from '../../../lib/20/solid/queue-list.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: QueueListSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="QueueList" />
