<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArchiveBoxSvelte from '../../../lib/24/solid/archive-box.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ArchiveBoxSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ArchiveBox" />
