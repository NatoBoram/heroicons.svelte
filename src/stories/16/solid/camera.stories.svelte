<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CameraSvelte from '../../../lib/16/solid/camera.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: CameraSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Camera" />
