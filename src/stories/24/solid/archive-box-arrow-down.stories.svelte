<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArchiveBoxArrowDownSvelte from '../../../lib/24/solid/archive-box-arrow-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ArchiveBoxArrowDownSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArchiveBoxArrowDown" />
