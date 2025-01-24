<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import SwatchSvelte from '../../../lib/24/outline/swatch.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: SwatchSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Swatch" />
