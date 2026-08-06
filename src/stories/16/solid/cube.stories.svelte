<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CubeSvelte from '../../../lib/16/solid/cube.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: CubeSvelte,
		args: { class: '' },
	})
</script>

<Story name="Cube" />
