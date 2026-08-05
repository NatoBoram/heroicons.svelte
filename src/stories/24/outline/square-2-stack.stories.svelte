<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import Square2StackSvelte from '../../../lib/24/outline/square-2-stack.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: Square2StackSvelte,
		args: { class: '' },
	})
</script>

<Story name="Square2Stack" />
