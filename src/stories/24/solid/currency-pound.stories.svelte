<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CurrencyPoundSvelte from '../../../lib/24/solid/currency-pound.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: CurrencyPoundSvelte,
		args: { class: '' },
	})
</script>

<Story name="CurrencyPound" />
