<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import MapPinSvelte from '../../../lib/16/solid/map-pin.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: MapPinSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="MapPin" />
