<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PhotoSvelte from '../../../lib/24/solid/photo.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: PhotoSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Photo" />
