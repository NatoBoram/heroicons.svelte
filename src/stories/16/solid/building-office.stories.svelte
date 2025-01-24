<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BuildingOfficeSvelte from '../../../lib/16/solid/building-office.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: BuildingOfficeSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="BuildingOffice" />
