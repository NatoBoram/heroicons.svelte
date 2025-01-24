<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BookmarkSquareSvelte from '../../../lib/24/outline/bookmark-square.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: BookmarkSquareSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="BookmarkSquare" />
