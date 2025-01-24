<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentChartBarSvelte from '../../../lib/24/outline/document-chart-bar.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: DocumentChartBarSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="DocumentChartBar" />
