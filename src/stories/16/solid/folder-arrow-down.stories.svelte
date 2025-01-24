<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import FolderArrowDownSvelte from '../../../lib/16/solid/folder-arrow-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: FolderArrowDownSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="FolderArrowDown" />
