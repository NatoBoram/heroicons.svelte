<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import FolderSvelte from '../../../lib/24/outline/folder.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: FolderSvelte,
		args: { class: '' },
	})
</script>

<Story name="Folder" />
