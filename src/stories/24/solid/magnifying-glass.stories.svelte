<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import MagnifyingGlassSvelte from '../../../lib/24/solid/magnifying-glass.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: MagnifyingGlassSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="MagnifyingGlass" />
