<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ShoppingBagSvelte from '../../../lib/20/solid/shopping-bag.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ShoppingBagSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="ShoppingBag" />
