<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentCurrencyYenSvelte from '../../../lib/24/outline/document-currency-yen.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: DocumentCurrencyYenSvelte,
		args: { class: '' },
	})
</script>

<Story name="DocumentCurrencyYen" />
