<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import NoSymbolSvelte from '../../../lib/20/solid/no-symbol.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: NoSymbolSvelte,
		args: { class: '' },
	})
</script>

<Story name="NoSymbol" />
