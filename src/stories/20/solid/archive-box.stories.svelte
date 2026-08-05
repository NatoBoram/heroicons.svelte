<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArchiveBoxSvelte from '../../../lib/20/solid/archive-box.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ArchiveBoxSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArchiveBox" />
