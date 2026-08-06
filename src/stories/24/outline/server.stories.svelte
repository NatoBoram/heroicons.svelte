<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ServerSvelte from '../../../lib/24/outline/server.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ServerSvelte,
		args: { class: '' },
	})
</script>

<Story name="Server" />
