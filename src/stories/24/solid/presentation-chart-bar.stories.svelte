<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PresentationChartBarSvelte from '../../../lib/24/solid/presentation-chart-bar.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: PresentationChartBarSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="PresentationChartBar" />
