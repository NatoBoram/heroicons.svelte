<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentCurrencyEuroSvelte from '../../../lib/16/solid/document-currency-euro.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: DocumentCurrencyEuroSvelte,
		args: { class: '' },
	})
</script>

<Story name="DocumentCurrencyEuro" />
