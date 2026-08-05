<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CursorArrowRaysSvelte from '../../../lib/24/outline/cursor-arrow-rays.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: CursorArrowRaysSvelte,
		args: { class: '' },
	})
</script>

<Story name="CursorArrowRays" />
