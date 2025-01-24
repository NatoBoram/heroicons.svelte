<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ServerSvelte from '../../../lib/24/solid/server.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ServerSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Server" />
