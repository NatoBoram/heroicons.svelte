<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowTrendingUpSvelte from '../../../lib/20/solid/arrow-trending-up.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ArrowTrendingUpSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="ArrowTrendingUp" />
