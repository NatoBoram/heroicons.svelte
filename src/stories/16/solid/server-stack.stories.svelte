<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ServerStackSvelte from '../../../lib/16/solid/server-stack.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ServerStackSvelte,
		args: { class: '' },
	})
</script>

<Story name="ServerStack" />
