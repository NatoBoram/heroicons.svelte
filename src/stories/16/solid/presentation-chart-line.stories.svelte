<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PresentationChartLineSvelte from '../../../lib/16/solid/presentation-chart-line.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: PresentationChartLineSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="PresentationChartLine" />
