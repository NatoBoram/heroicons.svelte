<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BookmarkSlashSvelte from '../../../lib/24/outline/bookmark-slash.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: BookmarkSlashSvelte,
		args: { class: '' },
	})
</script>

<Story name="BookmarkSlash" />
