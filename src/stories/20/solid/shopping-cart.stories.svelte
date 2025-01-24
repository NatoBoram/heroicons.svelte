<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ShoppingCartSvelte from '../../../lib/20/solid/shopping-cart.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ShoppingCartSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="ShoppingCart" />
