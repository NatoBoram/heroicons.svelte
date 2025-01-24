<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BookmarkSquareSvelte from '../../../lib/20/solid/bookmark-square.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: BookmarkSquareSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="BookmarkSquare" />
