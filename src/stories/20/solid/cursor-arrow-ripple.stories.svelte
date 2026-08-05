<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CursorArrowRippleSvelte from '../../../lib/20/solid/cursor-arrow-ripple.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: CursorArrowRippleSvelte,
		args: { class: '' },
	})
</script>

<Story name="CursorArrowRipple" />
