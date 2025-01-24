<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BuildingOfficeSvelte from '../../../lib/24/solid/building-office.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: BuildingOfficeSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="BuildingOffice" />
