<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CurrencyDollarSvelte from '../../../lib/24/solid/currency-dollar.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: CurrencyDollarSvelte,
		args: { class: '' },
	})
</script>

<Story name="CurrencyDollar" />
