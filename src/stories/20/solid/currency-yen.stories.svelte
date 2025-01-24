<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CurrencyYenSvelte from '../../../lib/20/solid/currency-yen.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: CurrencyYenSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="CurrencyYen" />
