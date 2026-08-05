<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import MapSvelte from '../../../lib/24/solid/map.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: MapSvelte,
		args: { class: '' },
	})
</script>

<Story name="Map" />
