<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CreditCardSvelte from '../../../lib/24/solid/credit-card.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: CreditCardSvelte,
		args: { class: '' },
	})
</script>

<Story name="CreditCard" />
