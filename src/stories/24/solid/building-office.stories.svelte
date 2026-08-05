<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BuildingOfficeSvelte from '../../../lib/24/solid/building-office.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: BuildingOfficeSvelte,
		args: { class: '' },
	})
</script>

<Story name="BuildingOffice" />
