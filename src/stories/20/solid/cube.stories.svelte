<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CubeSvelte from '../../../lib/20/solid/cube.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: CubeSvelte,
		args: { class: '' },
	})
</script>

<Story name="Cube" />
