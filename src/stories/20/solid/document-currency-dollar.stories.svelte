<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentCurrencyDollarSvelte from '../../../lib/20/solid/document-currency-dollar.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: DocumentCurrencyDollarSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="DocumentCurrencyDollar" />
