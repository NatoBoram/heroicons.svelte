<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArchiveBoxArrowDownSvelte from '../../../lib/24/solid/archive-box-arrow-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ArchiveBoxArrowDownSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ArchiveBoxArrowDown" />
