<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import GifSvelte from '../../../lib/16/solid/gif.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: GifSvelte,
		args: { class: '' },
	})
</script>

<Story name="Gif" />
