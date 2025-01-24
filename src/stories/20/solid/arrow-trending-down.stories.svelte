<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowTrendingDownSvelte from '../../../lib/20/solid/arrow-trending-down.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ArrowTrendingDownSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="ArrowTrendingDown" />
