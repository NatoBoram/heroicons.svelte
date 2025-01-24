<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import RectangleGroupSvelte from '../../../lib/20/solid/rectangle-group.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: RectangleGroupSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="RectangleGroup" />
