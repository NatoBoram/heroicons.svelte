<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ChartBarSquareSvelte from '../../../lib/16/solid/chart-bar-square.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ChartBarSquareSvelte,
		args: { class: '' },
	})
</script>

<Story name="ChartBarSquare" />
