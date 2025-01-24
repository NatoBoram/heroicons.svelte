<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import MagnifyingGlassSvelte from '../../../lib/24/outline/magnifying-glass.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: MagnifyingGlassSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="MagnifyingGlass" />
