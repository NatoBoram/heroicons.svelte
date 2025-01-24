<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BuildingLibrarySvelte from '../../../lib/24/outline/building-library.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: BuildingLibrarySvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="BuildingLibrary" />
