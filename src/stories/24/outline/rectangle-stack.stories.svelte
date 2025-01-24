<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import RectangleStackSvelte from '../../../lib/24/outline/rectangle-stack.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: RectangleStackSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="RectangleStack" />
