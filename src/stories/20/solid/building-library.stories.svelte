<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BuildingLibrarySvelte from '../../../lib/20/solid/building-library.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: BuildingLibrarySvelte,
		args: { class: '' },
	})
</script>

<Story name="BuildingLibrary" />
