<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CursorArrowRaysSvelte from '../../../lib/16/solid/cursor-arrow-rays.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: CursorArrowRaysSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="CursorArrowRays" />
