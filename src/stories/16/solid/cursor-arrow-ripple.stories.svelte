<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CursorArrowRippleSvelte from '../../../lib/16/solid/cursor-arrow-ripple.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: CursorArrowRippleSvelte,
		args: { class: '' },
	})
</script>

<Story name="CursorArrowRipple" />
