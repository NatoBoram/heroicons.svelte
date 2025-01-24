<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import FolderArrowDownSvelte from '../../../lib/24/outline/folder-arrow-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: FolderArrowDownSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="FolderArrowDown" />
