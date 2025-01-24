<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import MapSvelte from '../../../lib/24/outline/map.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: MapSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Map" />
