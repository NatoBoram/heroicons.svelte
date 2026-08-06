<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ShoppingBagSvelte from '../../../lib/24/outline/shopping-bag.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ShoppingBagSvelte,
		args: { class: '' },
	})
</script>

<Story name="ShoppingBag" />
