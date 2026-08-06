<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import TruckSvelte from '../../../lib/24/solid/truck.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: TruckSvelte,
		args: { class: '' },
	})
</script>

<Story name="Truck" />
