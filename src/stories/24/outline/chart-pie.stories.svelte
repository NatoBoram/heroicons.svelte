<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChartPieSvelte from '../../../lib/24/outline/chart-pie.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ChartPieSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ChartPie" />
