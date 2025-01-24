<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import TruckSvelte from '../../../lib/20/solid/truck.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: TruckSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="Truck" />
