<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CubeTransparentSvelte from '../../../lib/24/outline/cube-transparent.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: CubeTransparentSvelte,
		args: { class: '' },
	})
</script>

<Story name="CubeTransparent" />
