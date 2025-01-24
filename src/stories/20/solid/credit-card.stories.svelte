<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CreditCardSvelte from '../../../lib/20/solid/credit-card.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: CreditCardSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="CreditCard" />
