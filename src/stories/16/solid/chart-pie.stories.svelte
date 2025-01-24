<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChartPieSvelte from '../../../lib/16/solid/chart-pie.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ChartPieSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ChartPie" />
