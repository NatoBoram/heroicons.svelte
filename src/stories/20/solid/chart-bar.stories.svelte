<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChartBarSvelte from '../../../lib/20/solid/chart-bar.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ChartBarSvelte,
		args: { class: '' },
	})
</script>

<Story name="ChartBar" />
