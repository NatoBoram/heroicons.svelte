<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentCurrencyYenSvelte from '../../../lib/16/solid/document-currency-yen.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: DocumentCurrencyYenSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="DocumentCurrencyYen" />
