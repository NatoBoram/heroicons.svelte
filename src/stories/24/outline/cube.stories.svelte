<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CubeSvelte from '../../../lib/24/outline/cube.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: CubeSvelte,
		args: { class: '' },
	})
</script>

<Story name="Cube" />
