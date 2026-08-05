<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CurrencyDollarSvelte from '../../../lib/20/solid/currency-dollar.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: CurrencyDollarSvelte,
		args: { class: '' },
	})
</script>

<Story name="CurrencyDollar" />
