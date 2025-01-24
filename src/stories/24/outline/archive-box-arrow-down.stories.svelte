<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArchiveBoxArrowDownSvelte from '../../../lib/24/outline/archive-box-arrow-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ArchiveBoxArrowDownSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ArchiveBoxArrowDown" />
