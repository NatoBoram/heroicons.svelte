<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CreditCardSvelte from '../../../lib/24/outline/credit-card.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: CreditCardSvelte,
		args: { class: '' },
	})
</script>

<Story name="CreditCard" />
