<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import RectangleGroupSvelte from '../../../lib/24/solid/rectangle-group.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: RectangleGroupSvelte,
		args: { class: '' },
	})
</script>

<Story name="RectangleGroup" />
