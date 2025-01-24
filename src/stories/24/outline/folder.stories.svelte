<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import FolderSvelte from '../../../lib/24/outline/folder.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: FolderSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Folder" />
