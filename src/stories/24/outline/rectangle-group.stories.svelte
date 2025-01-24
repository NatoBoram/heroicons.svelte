<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import RectangleGroupSvelte from '../../../lib/24/outline/rectangle-group.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: RectangleGroupSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="RectangleGroup" />
