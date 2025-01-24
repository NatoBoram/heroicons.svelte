<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentCurrencyPoundSvelte from '../../../lib/24/outline/document-currency-pound.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: DocumentCurrencyPoundSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="DocumentCurrencyPound" />
