<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArchiveBoxArrowDownSvelte from '../../../lib/20/solid/archive-box-arrow-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ArchiveBoxArrowDownSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArchiveBoxArrowDown" />
