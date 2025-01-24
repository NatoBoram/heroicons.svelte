<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CreditCardSvelte from '../../../lib/24/solid/credit-card.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: CreditCardSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="CreditCard" />
