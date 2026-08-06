<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import FolderMinusSvelte from '../../../lib/20/solid/folder-minus.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: FolderMinusSvelte,
		args: { class: '' },
	})
</script>

<Story name="FolderMinus" />
