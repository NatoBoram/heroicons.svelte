<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentCurrencyDollarSvelte from '../../../lib/24/outline/document-currency-dollar.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: DocumentCurrencyDollarSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="DocumentCurrencyDollar" />
