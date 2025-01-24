<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import TruckSvelte from '../../../lib/24/solid/truck.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: TruckSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Truck" />
