<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CurrencyBangladeshiSvelte from '../../../lib/24/outline/currency-bangladeshi.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: CurrencyBangladeshiSvelte,
		args: { class: '' },
	})
</script>

<Story name="CurrencyBangladeshi" />
