<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import MagnifyingGlassSvelte from '../../../lib/20/solid/magnifying-glass.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: MagnifyingGlassSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="MagnifyingGlass" />
