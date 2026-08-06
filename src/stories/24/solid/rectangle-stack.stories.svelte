<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import RectangleStackSvelte from '../../../lib/24/solid/rectangle-stack.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: RectangleStackSvelte,
		args: { class: '' },
	})
</script>

<Story name="RectangleStack" />
