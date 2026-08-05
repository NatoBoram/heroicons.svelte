<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChartBarSquareSvelte from '../../../lib/24/outline/chart-bar-square.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ChartBarSquareSvelte,
		args: { class: '' },
	})
</script>

<Story name="ChartBarSquare" />
