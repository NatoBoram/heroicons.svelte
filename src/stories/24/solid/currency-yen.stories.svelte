<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CurrencyYenSvelte from '../../../lib/24/solid/currency-yen.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: CurrencyYenSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="CurrencyYen" />
