<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import Square3Stack3dSvelte from '../../../lib/16/solid/square-3-stack-3d.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: Square3Stack3dSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Square3Stack3d" />
