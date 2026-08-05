<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import TableCellsSvelte from '../../../lib/16/solid/table-cells.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: TableCellsSvelte,
		args: { class: '' },
	})
</script>

<Story name="TableCells" />
