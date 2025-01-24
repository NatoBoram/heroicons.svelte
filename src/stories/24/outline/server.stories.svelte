<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ServerSvelte from '../../../lib/24/outline/server.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ServerSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Server" />
