<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentCurrencyEuroSvelte from '../../../lib/24/outline/document-currency-euro.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: DocumentCurrencyEuroSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="DocumentCurrencyEuro" />
