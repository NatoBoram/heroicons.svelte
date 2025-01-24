<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import TruckSvelte from '../../../lib/16/solid/truck.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: TruckSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Truck" />
