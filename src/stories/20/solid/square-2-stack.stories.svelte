<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import Square2StackSvelte from '../../../lib/20/solid/square-2-stack.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: Square2StackSvelte,
		args: { class: '' },
	})
</script>

<Story name="Square2Stack" />
