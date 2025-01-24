<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import RectangleStackSvelte from '../../../lib/20/solid/rectangle-stack.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: RectangleStackSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="RectangleStack" />
