<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CameraSvelte from '../../../lib/24/outline/camera.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: CameraSvelte,
		args: { class: '' },
	})
</script>

<Story name="Camera" />
