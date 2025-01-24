<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import MagnifyingGlassMinusSvelte from '../../../lib/24/outline/magnifying-glass-minus.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: MagnifyingGlassMinusSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="MagnifyingGlassMinus" />
