<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import VideoCameraSvelte from '../../../lib/16/solid/video-camera.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: VideoCameraSvelte,
		args: { class: '' },
	})
</script>

<Story name="VideoCamera" />
