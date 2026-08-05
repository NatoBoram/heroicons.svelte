<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import MagnifyingGlassPlusSvelte from '../../../lib/24/outline/magnifying-glass-plus.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: MagnifyingGlassPlusSvelte,
		args: { class: '' },
	})
</script>

<Story name="MagnifyingGlassPlus" />
