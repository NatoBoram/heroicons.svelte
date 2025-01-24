<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PresentationChartBarSvelte from '../../../lib/20/solid/presentation-chart-bar.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: PresentationChartBarSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="PresentationChartBar" />
