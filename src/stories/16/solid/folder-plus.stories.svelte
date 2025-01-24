<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import FolderPlusSvelte from '../../../lib/16/solid/folder-plus.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: FolderPlusSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="FolderPlus" />
