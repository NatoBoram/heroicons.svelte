<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import Square3Stack3dSvelte from '../../../lib/20/solid/square-3-stack-3d.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: Square3Stack3dSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="Square3Stack3d" />
