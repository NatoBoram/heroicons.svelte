<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import DocumentCurrencyBangladeshiSvelte from '../../../lib/24/outline/document-currency-bangladeshi.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: DocumentCurrencyBangladeshiSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="DocumentCurrencyBangladeshi" />
