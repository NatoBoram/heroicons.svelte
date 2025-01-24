<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BuildingOfficeSvelte from '../../../lib/20/solid/building-office.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: BuildingOfficeSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="BuildingOffice" />
