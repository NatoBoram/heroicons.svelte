<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import MapPinSvelte from '../../../lib/20/solid/map-pin.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: MapPinSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="MapPin" />
