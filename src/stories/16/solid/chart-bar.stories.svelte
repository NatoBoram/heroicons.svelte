<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChartBarSvelte from '../../../lib/16/solid/chart-bar.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ChartBarSvelte,
		args: { class: '' },
	})
</script>

<Story name="ChartBar" />
