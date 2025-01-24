<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PhotoSvelte from '../../../lib/24/outline/photo.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: PhotoSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Photo" />
