<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import FolderOpenSvelte from '../../../lib/16/solid/folder-open.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: FolderOpenSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="FolderOpen" />
