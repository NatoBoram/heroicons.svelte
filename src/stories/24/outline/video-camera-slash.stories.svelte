<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import VideoCameraSlashSvelte from '../../../lib/24/outline/video-camera-slash.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: VideoCameraSlashSvelte,
		args: { class: '' },
	})
</script>

<Story name="VideoCameraSlash" />
