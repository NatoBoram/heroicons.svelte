<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentCurrencyRupeeSvelte from '../../../lib/24/outline/document-currency-rupee.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: DocumentCurrencyRupeeSvelte,
		args: { class: '' },
	})
</script>

<Story name="DocumentCurrencyRupee" />
