<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import GifSvelte from '../../../lib/20/solid/gif.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: GifSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="Gif" />
