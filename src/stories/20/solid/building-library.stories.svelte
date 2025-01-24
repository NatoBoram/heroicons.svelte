<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BuildingLibrarySvelte from '../../../lib/20/solid/building-library.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: BuildingLibrarySvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="BuildingLibrary" />
