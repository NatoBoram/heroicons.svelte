<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import TableCellsSvelte from '../../../lib/20/solid/table-cells.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: TableCellsSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="TableCells" />
