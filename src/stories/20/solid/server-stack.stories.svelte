<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ServerStackSvelte from '../../../lib/20/solid/server-stack.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ServerStackSvelte,
		args: { class: '' },
	})
</script>

<Story name="ServerStack" />
