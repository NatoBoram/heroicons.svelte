<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import MagnifyingGlassPlusSvelte from '../../../lib/16/solid/magnifying-glass-plus.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: MagnifyingGlassPlusSvelte,
		args: { class: '' },
	})
</script>

<Story name="MagnifyingGlassPlus" />
