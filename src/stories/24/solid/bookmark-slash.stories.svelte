<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BookmarkSlashSvelte from '../../../lib/24/solid/bookmark-slash.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: BookmarkSlashSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="BookmarkSlash" />
