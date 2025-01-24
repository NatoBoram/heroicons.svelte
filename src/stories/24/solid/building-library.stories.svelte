<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BuildingLibrarySvelte from '../../../lib/24/solid/building-library.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: BuildingLibrarySvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="BuildingLibrary" />
