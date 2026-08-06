<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import FolderArrowDownSvelte from '../../../lib/20/solid/folder-arrow-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: FolderArrowDownSvelte,
		args: { class: '' },
	})
</script>

<Story name="FolderArrowDown" />
