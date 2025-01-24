<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import SwatchSvelte from '../../../lib/16/solid/swatch.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: SwatchSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Swatch" />
