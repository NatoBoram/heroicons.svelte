<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArchiveBoxXMarkSvelte from '../../../lib/20/solid/archive-box-x-mark.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ArchiveBoxXMarkSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArchiveBoxXMark" />
