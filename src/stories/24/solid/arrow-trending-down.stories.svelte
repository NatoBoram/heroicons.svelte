<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowTrendingDownSvelte from '../../../lib/24/solid/arrow-trending-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ArrowTrendingDownSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ArrowTrendingDown" />
