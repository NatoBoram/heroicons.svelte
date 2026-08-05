<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CursorArrowRippleSvelte from '../../../lib/24/outline/cursor-arrow-ripple.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: CursorArrowRippleSvelte,
		args: { class: '' },
	})
</script>

<Story name="CursorArrowRipple" />
