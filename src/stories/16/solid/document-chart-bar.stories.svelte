<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentChartBarSvelte from '../../../lib/16/solid/document-chart-bar.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: DocumentChartBarSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="DocumentChartBar" />
