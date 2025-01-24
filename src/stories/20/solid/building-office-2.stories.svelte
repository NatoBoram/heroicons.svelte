<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BuildingOffice2Svelte from '../../../lib/20/solid/building-office-2.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: BuildingOffice2Svelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="BuildingOffice2" />
