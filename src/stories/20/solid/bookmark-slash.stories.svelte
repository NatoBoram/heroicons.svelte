<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BookmarkSlashSvelte from '../../../lib/20/solid/bookmark-slash.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: BookmarkSlashSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="BookmarkSlash" />
