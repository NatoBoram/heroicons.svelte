<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PhotoSvelte from '../../../lib/16/solid/photo.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: PhotoSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Photo" />
