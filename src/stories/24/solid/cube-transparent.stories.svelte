<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CubeTransparentSvelte from '../../../lib/24/solid/cube-transparent.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: CubeTransparentSvelte,
		args: { class: '' },
	})
</script>

<Story name="CubeTransparent" />
