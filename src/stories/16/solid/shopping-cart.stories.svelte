<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ShoppingCartSvelte from '../../../lib/16/solid/shopping-cart.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ShoppingCartSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="ShoppingCart" />
