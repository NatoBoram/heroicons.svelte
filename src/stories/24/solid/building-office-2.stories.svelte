<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BuildingOffice2Svelte from '../../../lib/24/solid/building-office-2.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: BuildingOffice2Svelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="BuildingOffice2" />
