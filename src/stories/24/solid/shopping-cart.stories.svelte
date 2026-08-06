<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ShoppingCartSvelte from '../../../lib/24/solid/shopping-cart.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ShoppingCartSvelte,
		args: { class: '' },
	})
</script>

<Story name="ShoppingCart" />
