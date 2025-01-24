<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentChartBarSvelte from '../../../lib/20/solid/document-chart-bar.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: DocumentChartBarSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="DocumentChartBar" />
