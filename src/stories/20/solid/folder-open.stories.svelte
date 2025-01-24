<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import FolderOpenSvelte from '../../../lib/20/solid/folder-open.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: FolderOpenSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="FolderOpen" />
