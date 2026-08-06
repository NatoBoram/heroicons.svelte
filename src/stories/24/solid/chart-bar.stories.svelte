<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChartBarSvelte from '../../../lib/24/solid/chart-bar.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ChartBarSvelte,
		args: { class: '' },
	})
</script>

<Story name="ChartBar" />
