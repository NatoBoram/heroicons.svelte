<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import MagnifyingGlassPlusSvelte from '../../../lib/24/solid/magnifying-glass-plus.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: MagnifyingGlassPlusSvelte,
		args: { class: '' },
	})
</script>

<Story name="MagnifyingGlassPlus" />
