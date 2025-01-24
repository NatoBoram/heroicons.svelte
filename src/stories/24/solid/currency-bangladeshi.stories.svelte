<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CurrencyBangladeshiSvelte from '../../../lib/24/solid/currency-bangladeshi.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: CurrencyBangladeshiSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="CurrencyBangladeshi" />
