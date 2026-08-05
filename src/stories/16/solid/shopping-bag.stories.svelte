<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ShoppingBagSvelte from '../../../lib/16/solid/shopping-bag.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ShoppingBagSvelte,
		args: { class: '' },
	})
</script>

<Story name="ShoppingBag" />
