<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PresentationChartBarSvelte from '../../../lib/16/solid/presentation-chart-bar.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: PresentationChartBarSvelte,
		args: { class: '' },
	})
</script>

<Story name="PresentationChartBar" />
