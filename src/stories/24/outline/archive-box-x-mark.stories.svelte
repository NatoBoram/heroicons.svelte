<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArchiveBoxXMarkSvelte from '../../../lib/24/outline/archive-box-x-mark.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ArchiveBoxXMarkSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArchiveBoxXMark" />
