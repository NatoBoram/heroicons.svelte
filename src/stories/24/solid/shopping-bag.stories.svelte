<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ShoppingBagSvelte from '../../../lib/24/solid/shopping-bag.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ShoppingBagSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="ShoppingBag" />
