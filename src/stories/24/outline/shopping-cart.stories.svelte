<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ShoppingCartSvelte from '../../../lib/24/outline/shopping-cart.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ShoppingCartSvelte,
		args: { class: '' },
	})
</script>

<Story name="ShoppingCart" />
