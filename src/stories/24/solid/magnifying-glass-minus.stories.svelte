<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import MagnifyingGlassMinusSvelte from '../../../lib/24/solid/magnifying-glass-minus.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: MagnifyingGlassMinusSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="MagnifyingGlassMinus" />
