<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentCurrencyRupeeSvelte from '../../../lib/20/solid/document-currency-rupee.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: DocumentCurrencyRupeeSvelte,
		args: { class: '' },
	})
</script>

<Story name="DocumentCurrencyRupee" />
