<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import FolderMinusSvelte from '../../../lib/24/outline/folder-minus.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: FolderMinusSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="FolderMinus" />
