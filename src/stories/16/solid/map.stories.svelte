<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import MapSvelte from '../../../lib/16/solid/map.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: MapSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Map" />
