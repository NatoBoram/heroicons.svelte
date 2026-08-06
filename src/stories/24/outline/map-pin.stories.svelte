<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import MapPinSvelte from '../../../lib/24/outline/map-pin.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: MapPinSvelte,
		args: { class: '' },
	})
</script>

<Story name="MapPin" />
