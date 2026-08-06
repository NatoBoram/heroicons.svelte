<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArchiveBoxSvelte from '../../../lib/24/solid/archive-box.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ArchiveBoxSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArchiveBox" />
