<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PresentationChartLineSvelte from '../../../lib/20/solid/presentation-chart-line.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: PresentationChartLineSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="PresentationChartLine" />
