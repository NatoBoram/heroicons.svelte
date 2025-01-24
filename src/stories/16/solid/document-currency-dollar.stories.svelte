<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentCurrencyDollarSvelte from '../../../lib/16/solid/document-currency-dollar.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: DocumentCurrencyDollarSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="DocumentCurrencyDollar" />
