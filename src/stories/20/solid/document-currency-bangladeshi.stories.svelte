<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentCurrencyBangladeshiSvelte from '../../../lib/20/solid/document-currency-bangladeshi.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: DocumentCurrencyBangladeshiSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="DocumentCurrencyBangladeshi" />
