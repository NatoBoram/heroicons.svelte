<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CurrencyRupeeSvelte from '../../../lib/24/outline/currency-rupee.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: CurrencyRupeeSvelte,
		args: { class: '' },
	})
</script>

<Story name="CurrencyRupee" />
