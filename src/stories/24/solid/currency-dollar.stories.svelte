<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CurrencyDollarSvelte from '../../../lib/24/solid/currency-dollar.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: CurrencyDollarSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="CurrencyDollar" />
