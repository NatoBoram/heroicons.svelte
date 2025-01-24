<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BuildingOffice2Svelte from '../../../lib/16/solid/building-office-2.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: BuildingOffice2Svelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="BuildingOffice2" />
