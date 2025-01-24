<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentCurrencyRupeeSvelte from '../../../lib/24/solid/document-currency-rupee.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: DocumentCurrencyRupeeSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="DocumentCurrencyRupee" />
