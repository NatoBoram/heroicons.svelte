<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import MapSvelte from '../../../lib/20/solid/map.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: MapSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="Map" />
