<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PhotoSvelte from '../../../lib/20/solid/photo.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: PhotoSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="Photo" />
