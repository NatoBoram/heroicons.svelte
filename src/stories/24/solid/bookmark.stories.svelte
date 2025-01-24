<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BookmarkSvelte from '../../../lib/24/solid/bookmark.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: BookmarkSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Bookmark" />
