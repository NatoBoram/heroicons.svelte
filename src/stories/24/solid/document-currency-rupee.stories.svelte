<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentCurrencyRupeeSvelte from '../../../lib/24/solid/document-currency-rupee.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: DocumentCurrencyRupeeSvelte,
		args: { class: '' },
	})
</script>

<Story name="DocumentCurrencyRupee" />
