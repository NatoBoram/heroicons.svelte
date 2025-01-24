<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import FolderOpenSvelte from '../../../lib/24/solid/folder-open.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: FolderOpenSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="FolderOpen" />
