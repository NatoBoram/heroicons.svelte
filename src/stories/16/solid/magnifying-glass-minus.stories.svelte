<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import MagnifyingGlassMinusSvelte from '../../../lib/16/solid/magnifying-glass-minus.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: MagnifyingGlassMinusSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="MagnifyingGlassMinus" />
