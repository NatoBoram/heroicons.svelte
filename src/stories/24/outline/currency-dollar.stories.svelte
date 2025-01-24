<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CurrencyDollarSvelte from '../../../lib/24/outline/currency-dollar.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: CurrencyDollarSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="CurrencyDollar" />
