<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import Square3Stack3dSvelte from '../../../lib/24/outline/square-3-stack-3d.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: Square3Stack3dSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Square3Stack3d" />
