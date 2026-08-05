<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentCurrencyEuroSvelte from '../../../lib/24/solid/document-currency-euro.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: DocumentCurrencyEuroSvelte,
		args: { class: '' },
	})
</script>

<Story name="DocumentCurrencyEuro" />
