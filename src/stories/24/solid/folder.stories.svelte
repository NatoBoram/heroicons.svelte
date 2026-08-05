<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import FolderSvelte from '../../../lib/24/solid/folder.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: FolderSvelte,
		args: { class: '' },
	})
</script>

<Story name="Folder" />
