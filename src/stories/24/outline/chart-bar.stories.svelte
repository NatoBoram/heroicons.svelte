<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChartBarSvelte from '../../../lib/24/outline/chart-bar.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ChartBarSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ChartBar" />
