<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CubeSvelte from '../../../lib/24/solid/cube.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: CubeSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Cube" />
