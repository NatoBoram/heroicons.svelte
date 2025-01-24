<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import FolderSvelte from '../../../lib/16/solid/folder.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: FolderSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Folder" />
