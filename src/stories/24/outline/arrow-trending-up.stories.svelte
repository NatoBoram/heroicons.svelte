<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowTrendingUpSvelte from '../../../lib/24/outline/arrow-trending-up.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ArrowTrendingUpSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ArrowTrendingUp" />
