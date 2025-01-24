<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import FolderMinusSvelte from '../../../lib/16/solid/folder-minus.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: FolderMinusSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="FolderMinus" />
