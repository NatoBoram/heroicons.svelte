<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentCurrencyBangladeshiSvelte from '../../../lib/24/solid/document-currency-bangladeshi.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: DocumentCurrencyBangladeshiSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="DocumentCurrencyBangladeshi" />
