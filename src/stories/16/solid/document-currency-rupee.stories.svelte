<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentCurrencyRupeeSvelte from '../../../lib/16/solid/document-currency-rupee.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: DocumentCurrencyRupeeSvelte,
		args: { class: '' },
	})
</script>

<Story name="DocumentCurrencyRupee" />
