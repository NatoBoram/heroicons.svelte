<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ServerSvelte from '../../../lib/20/solid/server.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ServerSvelte,
		args: { class: '' },
	})
</script>

<Story name="Server" />
