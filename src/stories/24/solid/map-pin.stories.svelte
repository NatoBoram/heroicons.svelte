<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import MapPinSvelte from '../../../lib/24/solid/map-pin.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: MapPinSvelte,
		args: { class: '' },
	})
</script>

<Story name="MapPin" />
