<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import VideoCameraSvelte from '../../../lib/20/solid/video-camera.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: VideoCameraSvelte,
		args: { class: '' },
	})
</script>

<Story name="VideoCamera" />
