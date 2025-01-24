<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import GifSvelte from '../../../lib/24/solid/gif.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: GifSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Gif" />
