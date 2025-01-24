<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentCurrencyYenSvelte from '../../../lib/24/solid/document-currency-yen.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: DocumentCurrencyYenSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="DocumentCurrencyYen" />
