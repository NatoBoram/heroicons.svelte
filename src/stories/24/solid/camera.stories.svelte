<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CameraSvelte from '../../../lib/24/solid/camera.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: CameraSvelte,
		args: { class: '' },
	})
</script>

<Story name="Camera" />
