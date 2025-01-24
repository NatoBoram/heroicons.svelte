<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import MagnifyingGlassPlusSvelte from '../../../lib/24/outline/magnifying-glass-plus.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: MagnifyingGlassPlusSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="MagnifyingGlassPlus" />
