<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import MagnifyingGlassPlusSvelte from '../../../lib/20/solid/magnifying-glass-plus.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: MagnifyingGlassPlusSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="MagnifyingGlassPlus" />
