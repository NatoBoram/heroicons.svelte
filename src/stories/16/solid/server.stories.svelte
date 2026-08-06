<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ServerSvelte from '../../../lib/16/solid/server.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ServerSvelte,
		args: { class: '' },
	})
</script>

<Story name="Server" />
