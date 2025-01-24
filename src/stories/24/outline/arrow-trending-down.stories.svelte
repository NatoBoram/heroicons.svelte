<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowTrendingDownSvelte from '../../../lib/24/outline/arrow-trending-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ArrowTrendingDownSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ArrowTrendingDown" />
