<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import FolderPlusSvelte from '../../../lib/20/solid/folder-plus.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: FolderPlusSvelte,
		args: { class: '' },
	})
</script>

<Story name="FolderPlus" />
