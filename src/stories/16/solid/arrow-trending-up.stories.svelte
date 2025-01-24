<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowTrendingUpSvelte from '../../../lib/16/solid/arrow-trending-up.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ArrowTrendingUpSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ArrowTrendingUp" />
