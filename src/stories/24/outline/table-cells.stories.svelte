<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import TableCellsSvelte from '../../../lib/24/outline/table-cells.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: TableCellsSvelte,
		args: { class: '' },
	})
</script>

<Story name="TableCells" />
