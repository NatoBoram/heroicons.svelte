<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ShoppingCartSvelte from '../../../lib/24/outline/shopping-cart.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ShoppingCartSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ShoppingCart" />
