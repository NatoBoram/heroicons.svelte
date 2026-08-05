<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import VideoCameraSlashSvelte from '../../../lib/24/solid/video-camera-slash.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: VideoCameraSlashSvelte,
		args: { class: '' },
	})
</script>

<Story name="VideoCameraSlash" />
