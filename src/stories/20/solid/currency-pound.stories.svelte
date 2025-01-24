<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CurrencyPoundSvelte from '../../../lib/20/solid/currency-pound.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: CurrencyPoundSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="CurrencyPound" />
