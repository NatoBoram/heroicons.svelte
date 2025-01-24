<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChartPieSvelte from '../../../lib/20/solid/chart-pie.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ChartPieSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="ChartPie" />
