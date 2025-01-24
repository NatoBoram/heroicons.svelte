<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArchiveBoxSvelte from '../../../lib/16/solid/archive-box.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ArchiveBoxSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ArchiveBox" />
