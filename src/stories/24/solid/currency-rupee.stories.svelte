<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CurrencyRupeeSvelte from '../../../lib/24/solid/currency-rupee.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: CurrencyRupeeSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="CurrencyRupee" />
