<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import MagnifyingGlassSvelte from '../../../lib/16/solid/magnifying-glass.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: MagnifyingGlassSvelte,
		args: { class: '' },
	})
</script>

<Story name="MagnifyingGlass" />
