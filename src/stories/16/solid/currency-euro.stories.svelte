<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CurrencyEuroSvelte from '../../../lib/16/solid/currency-euro.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: CurrencyEuroSvelte,
		args: { class: '' },
	})
</script>

<Story name="CurrencyEuro" />
