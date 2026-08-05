<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import VideoCameraSlashSvelte from '../../../lib/16/solid/video-camera-slash.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: VideoCameraSlashSvelte,
		args: { class: '' },
	})
</script>

<Story name="VideoCameraSlash" />
