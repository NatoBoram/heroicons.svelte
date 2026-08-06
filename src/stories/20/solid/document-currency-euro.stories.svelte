<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentCurrencyEuroSvelte from '../../../lib/20/solid/document-currency-euro.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: DocumentCurrencyEuroSvelte,
		args: { class: '' },
	})
</script>

<Story name="DocumentCurrencyEuro" />
