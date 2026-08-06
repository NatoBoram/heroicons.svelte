<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import NoSymbolSvelte from '../../../lib/16/solid/no-symbol.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: NoSymbolSvelte,
		args: { class: '' },
	})
</script>

<Story name="NoSymbol" />
