<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CurrencyBangladeshiSvelte from '../../../lib/20/solid/currency-bangladeshi.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: CurrencyBangladeshiSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="CurrencyBangladeshi" />
