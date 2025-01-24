<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BookmarkSquareSvelte from '../../../lib/16/solid/bookmark-square.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: BookmarkSquareSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="BookmarkSquare" />
