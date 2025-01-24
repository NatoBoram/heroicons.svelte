<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import Square2StackSvelte from '../../../lib/16/solid/square-2-stack.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: Square2StackSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Square2Stack" />
