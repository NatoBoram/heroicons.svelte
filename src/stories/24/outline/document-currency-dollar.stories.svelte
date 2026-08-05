<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentCurrencyDollarSvelte from '../../../lib/24/outline/document-currency-dollar.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: DocumentCurrencyDollarSvelte,
		args: { class: '' },
	})
</script>

<Story name="DocumentCurrencyDollar" />
