<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import Square2StackSvelte from '../../../lib/24/solid/square-2-stack.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: Square2StackSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Square2Stack" />
