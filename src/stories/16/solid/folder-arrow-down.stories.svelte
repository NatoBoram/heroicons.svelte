<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import FolderArrowDownSvelte from '../../../lib/16/solid/folder-arrow-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: FolderArrowDownSvelte,
		args: { class: '' },
	})
</script>

<Story name="FolderArrowDown" />
