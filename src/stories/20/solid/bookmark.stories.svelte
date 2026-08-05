<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BookmarkSvelte from '../../../lib/20/solid/bookmark.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: BookmarkSvelte,
		args: { class: '' },
	})
</script>

<Story name="Bookmark" />
