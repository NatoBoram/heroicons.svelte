<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentCurrencyPoundSvelte from '../../../lib/20/solid/document-currency-pound.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: DocumentCurrencyPoundSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="DocumentCurrencyPound" />
