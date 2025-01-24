<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import TableCellsSvelte from '../../../lib/24/solid/table-cells.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: TableCellsSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="TableCells" />
