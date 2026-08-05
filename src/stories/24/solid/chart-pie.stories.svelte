<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChartPieSvelte from '../../../lib/24/solid/chart-pie.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ChartPieSvelte,
		args: { class: '' },
	})
</script>

<Story name="ChartPie" />
