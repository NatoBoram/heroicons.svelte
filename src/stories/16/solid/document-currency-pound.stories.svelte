<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentCurrencyPoundSvelte from '../../../lib/16/solid/document-currency-pound.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: DocumentCurrencyPoundSvelte,
		args: { class: '' },
	})
</script>

<Story name="DocumentCurrencyPound" />
