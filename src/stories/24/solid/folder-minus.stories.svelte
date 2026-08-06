<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import FolderMinusSvelte from '../../../lib/24/solid/folder-minus.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: FolderMinusSvelte,
		args: { class: '' },
	})
</script>

<Story name="FolderMinus" />
