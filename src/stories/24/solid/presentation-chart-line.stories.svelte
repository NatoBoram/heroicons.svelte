<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PresentationChartLineSvelte from '../../../lib/24/solid/presentation-chart-line.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: PresentationChartLineSvelte,
		args: { class: '' },
	})
</script>

<Story name="PresentationChartLine" />
