<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PresentationChartBarSvelte from '../../../lib/24/outline/presentation-chart-bar.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: PresentationChartBarSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="PresentationChartBar" />
