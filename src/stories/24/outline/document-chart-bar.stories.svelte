<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentChartBarSvelte from '../../../lib/24/outline/document-chart-bar.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: DocumentChartBarSvelte,
		args: { class: '' },
	})
</script>

<Story name="DocumentChartBar" />
