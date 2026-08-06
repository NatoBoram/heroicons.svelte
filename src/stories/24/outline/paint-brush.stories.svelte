<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PaintBrushSvelte from '../../../lib/24/outline/paint-brush.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: PaintBrushSvelte,
		args: { class: '' },
	})
</script>

<Story name="PaintBrush" />
