<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CurrencyPoundSvelte from '../../../lib/16/solid/currency-pound.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: CurrencyPoundSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="CurrencyPound" />
