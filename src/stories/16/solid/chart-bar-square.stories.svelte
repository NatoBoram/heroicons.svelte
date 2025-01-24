<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChartBarSquareSvelte from '../../../lib/16/solid/chart-bar-square.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ChartBarSquareSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ChartBarSquare" />
