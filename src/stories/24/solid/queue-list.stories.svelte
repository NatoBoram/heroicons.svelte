<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import QueueListSvelte from '../../../lib/24/solid/queue-list.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: QueueListSvelte,
		args: { class: '' },
	})
</script>

<Story name="QueueList" />
