<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CreditCardSvelte from '../../../lib/16/solid/credit-card.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: CreditCardSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="CreditCard" />
