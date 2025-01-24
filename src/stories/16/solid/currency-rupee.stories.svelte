<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CurrencyRupeeSvelte from '../../../lib/16/solid/currency-rupee.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: CurrencyRupeeSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="CurrencyRupee" />
