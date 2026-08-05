<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import SwatchSvelte from '../../../lib/24/solid/swatch.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: SwatchSvelte,
		args: { class: '' },
	})
</script>

<Story name="Swatch" />
