<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BookmarkSvelte from '../../../lib/20/solid/bookmark.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: BookmarkSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="Bookmark" />
