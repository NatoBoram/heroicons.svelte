<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArchiveBoxXMarkSvelte from '../../../lib/16/solid/archive-box-x-mark.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ArchiveBoxXMarkSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ArchiveBoxXMark" />
