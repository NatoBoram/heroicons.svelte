<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PaintBrushSvelte from '../../../lib/16/solid/paint-brush.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: PaintBrushSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="PaintBrush" />
