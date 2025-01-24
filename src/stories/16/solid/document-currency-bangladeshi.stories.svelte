<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentCurrencyBangladeshiSvelte from '../../../lib/16/solid/document-currency-bangladeshi.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: DocumentCurrencyBangladeshiSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="DocumentCurrencyBangladeshi" />
