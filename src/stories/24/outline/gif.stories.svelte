<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import GifSvelte from '../../../lib/24/outline/gif.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: GifSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Gif" />
