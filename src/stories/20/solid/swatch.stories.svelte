<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import SwatchSvelte from '../../../lib/20/solid/swatch.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: SwatchSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="Swatch" />
