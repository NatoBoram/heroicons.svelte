<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BuildingOfficeSvelte from '../../../lib/24/outline/building-office.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: BuildingOfficeSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="BuildingOffice" />
