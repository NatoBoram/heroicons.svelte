<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentCurrencyEuroSvelte from '../../../lib/20/solid/document-currency-euro.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: DocumentCurrencyEuroSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="DocumentCurrencyEuro" />
