<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import RectangleGroupSvelte from '../../../lib/16/solid/rectangle-group.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: RectangleGroupSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="RectangleGroup" />
