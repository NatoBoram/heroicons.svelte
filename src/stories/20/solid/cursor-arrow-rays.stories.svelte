<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CursorArrowRaysSvelte from '../../../lib/20/solid/cursor-arrow-rays.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: CursorArrowRaysSvelte,
		args: { class: '' },
	})
</script>

<Story name="CursorArrowRays" />
