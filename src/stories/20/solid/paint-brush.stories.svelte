<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PaintBrushSvelte from '../../../lib/20/solid/paint-brush.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: PaintBrushSvelte,
		args: { class: '' },
	})
</script>

<Story name="PaintBrush" />
