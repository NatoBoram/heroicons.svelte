<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import FolderSvelte from '../../../lib/20/solid/folder.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: FolderSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="Folder" />
