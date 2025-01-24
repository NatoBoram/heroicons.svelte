<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import FolderPlusSvelte from '../../../lib/24/solid/folder-plus.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: FolderPlusSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="FolderPlus" />
