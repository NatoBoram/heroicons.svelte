<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ShoppingCartSvelte from '../../../lib/16/solid/shopping-cart.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ShoppingCartSvelte,
		args: { class: '' },
	})
</script>

<Story name="ShoppingCart" />
