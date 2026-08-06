<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CurrencyPoundSvelte from '../../../lib/24/outline/currency-pound.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: CurrencyPoundSvelte,
		args: { class: '' },
	})
</script>

<Story name="CurrencyPound" />
