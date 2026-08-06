<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CursorArrowRippleSvelte from '../../../lib/24/solid/cursor-arrow-ripple.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: CursorArrowRippleSvelte,
		args: { class: '' },
	})
</script>

<Story name="CursorArrowRipple" />
