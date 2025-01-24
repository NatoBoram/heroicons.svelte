<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CurrencyYenSvelte from '../../../lib/16/solid/currency-yen.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: CurrencyYenSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="CurrencyYen" />
