<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CreditCardSvelte from '../../../lib/20/solid/credit-card.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: CreditCardSvelte,
		args: { class: '' },
	})
</script>

<Story name="CreditCard" />
