<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CurrencyEuroSvelte from '../../../lib/20/solid/currency-euro.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: CurrencyEuroSvelte,
		args: { class: '' },
	})
</script>

<Story name="CurrencyEuro" />
