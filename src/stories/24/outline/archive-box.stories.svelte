<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArchiveBoxSvelte from '../../../lib/24/outline/archive-box.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ArchiveBoxSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ArchiveBox" />
