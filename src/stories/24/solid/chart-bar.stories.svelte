<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChartBarSvelte from '../../../lib/24/solid/chart-bar.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ChartBarSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ChartBar" />
