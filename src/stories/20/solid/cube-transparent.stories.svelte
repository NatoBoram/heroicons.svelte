<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CubeTransparentSvelte from '../../../lib/20/solid/cube-transparent.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: CubeTransparentSvelte,
		args: { class: '' },
	})
</script>

<Story name="CubeTransparent" />
