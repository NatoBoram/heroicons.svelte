<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentCurrencyDollarSvelte from '../../../lib/24/solid/document-currency-dollar.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: DocumentCurrencyDollarSvelte,
		args: { class: '' },
	})
</script>

<Story name="DocumentCurrencyDollar" />
