<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentCurrencyYenSvelte from '../../../lib/20/solid/document-currency-yen.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: DocumentCurrencyYenSvelte,
		args: { class: '' },
	})
</script>

<Story name="DocumentCurrencyYen" />
