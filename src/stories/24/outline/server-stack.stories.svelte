<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ServerStackSvelte from '../../../lib/24/outline/server-stack.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ServerStackSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ServerStack" />
