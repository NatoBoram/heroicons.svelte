<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CreditCardSvelte from '../../../lib/24/outline/credit-card.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: CreditCardSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="CreditCard" />
