<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArchiveBoxArrowDownSvelte from '../../../lib/16/solid/archive-box-arrow-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ArchiveBoxArrowDownSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ArchiveBoxArrowDown" />
