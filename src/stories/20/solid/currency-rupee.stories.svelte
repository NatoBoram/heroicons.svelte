<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CurrencyRupeeSvelte from '../../../lib/20/solid/currency-rupee.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: CurrencyRupeeSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="CurrencyRupee" />
