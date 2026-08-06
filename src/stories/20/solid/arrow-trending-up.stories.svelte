<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowTrendingUpSvelte from '../../../lib/20/solid/arrow-trending-up.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ArrowTrendingUpSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowTrendingUp" />
