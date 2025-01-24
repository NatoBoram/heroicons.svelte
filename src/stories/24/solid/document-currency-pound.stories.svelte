<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentCurrencyPoundSvelte from '../../../lib/24/solid/document-currency-pound.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: DocumentCurrencyPoundSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="DocumentCurrencyPound" />
