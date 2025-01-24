<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentCurrencyEuroSvelte from '../../../lib/16/solid/document-currency-euro.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: DocumentCurrencyEuroSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="DocumentCurrencyEuro" />
