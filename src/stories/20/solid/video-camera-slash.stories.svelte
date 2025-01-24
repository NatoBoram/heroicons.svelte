<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import VideoCameraSlashSvelte from '../../../lib/20/solid/video-camera-slash.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: VideoCameraSlashSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="VideoCameraSlash" />
