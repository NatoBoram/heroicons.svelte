<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import VideoCameraSvelte from '../../../lib/16/solid/video-camera.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: VideoCameraSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="VideoCamera" />
