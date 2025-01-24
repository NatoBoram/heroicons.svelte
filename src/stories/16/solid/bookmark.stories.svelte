<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BookmarkSvelte from '../../../lib/16/solid/bookmark.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: BookmarkSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Bookmark" />
