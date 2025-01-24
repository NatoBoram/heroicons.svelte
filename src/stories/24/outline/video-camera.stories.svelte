<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import VideoCameraSvelte from '../../../lib/24/outline/video-camera.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: VideoCameraSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="VideoCamera" />
