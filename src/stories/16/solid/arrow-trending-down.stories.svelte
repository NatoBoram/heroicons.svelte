<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowTrendingDownSvelte from '../../../lib/16/solid/arrow-trending-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ArrowTrendingDownSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowTrendingDown" />
