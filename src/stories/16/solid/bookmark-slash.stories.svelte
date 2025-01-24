<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BookmarkSlashSvelte from '../../../lib/16/solid/bookmark-slash.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: BookmarkSlashSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="BookmarkSlash" />
