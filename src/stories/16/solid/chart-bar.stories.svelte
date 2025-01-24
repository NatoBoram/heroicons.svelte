<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChartBarSvelte from '../../../lib/16/solid/chart-bar.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ChartBarSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ChartBar" />
