<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import TruckSvelte from '../../../lib/24/outline/truck.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: TruckSvelte,
		args: { class: '' },
	})
</script>

<Story name="Truck" />
