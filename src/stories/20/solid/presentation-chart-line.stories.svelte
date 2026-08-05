<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PresentationChartLineSvelte from '../../../lib/20/solid/presentation-chart-line.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: PresentationChartLineSvelte,
		args: { class: '' },
	})
</script>

<Story name="PresentationChartLine" />
