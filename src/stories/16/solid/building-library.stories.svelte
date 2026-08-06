<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BuildingLibrarySvelte from '../../../lib/16/solid/building-library.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: BuildingLibrarySvelte,
		args: { class: '' },
	})
</script>

<Story name="BuildingLibrary" />
