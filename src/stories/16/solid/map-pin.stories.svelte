<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import MapPinSvelte from '../../../lib/16/solid/map-pin.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: MapPinSvelte,
		args: { class: '' },
	})
</script>

<Story name="MapPin" />
