<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import FolderPlusSvelte from '../../../lib/24/outline/folder-plus.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: FolderPlusSvelte,
		args: { class: '' },
	})
</script>

<Story name="FolderPlus" />
