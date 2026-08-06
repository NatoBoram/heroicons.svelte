<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CubeTransparentSvelte from '../../../lib/16/solid/cube-transparent.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: CubeTransparentSvelte,
		args: { class: '' },
	})
</script>

<Story name="CubeTransparent" />
