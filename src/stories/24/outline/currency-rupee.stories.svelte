<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CurrencyRupeeSvelte from '../../../lib/24/outline/currency-rupee.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: CurrencyRupeeSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="CurrencyRupee" />
