<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PresentationChartBarSvelte from '../../../lib/24/outline/presentation-chart-bar.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: PresentationChartBarSvelte,
		args: { class: '' },
	})
</script>

<Story name="PresentationChartBar" />
