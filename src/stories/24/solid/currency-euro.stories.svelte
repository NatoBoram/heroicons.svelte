<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CurrencyEuroSvelte from '../../../lib/24/solid/currency-euro.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: CurrencyEuroSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="CurrencyEuro" />
