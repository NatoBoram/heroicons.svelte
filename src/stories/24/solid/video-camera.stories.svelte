<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import VideoCameraSvelte from '../../../lib/24/solid/video-camera.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: VideoCameraSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="VideoCamera" />
