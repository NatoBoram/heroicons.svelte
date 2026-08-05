<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PresentationChartLineSvelte from '../../../lib/24/outline/presentation-chart-line.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: PresentationChartLineSvelte,
		args: { class: '' },
	})
</script>

<Story name="PresentationChartLine" />
