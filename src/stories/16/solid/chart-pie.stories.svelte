<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChartPieSvelte from '../../../lib/16/solid/chart-pie.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ChartPieSvelte,
		args: { class: '' },
	})
</script>

<Story name="ChartPie" />
