<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CameraSvelte from '../../../lib/16/solid/camera.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: CameraSvelte,
		args: { class: '' },
	})
</script>

<Story name="Camera" />
