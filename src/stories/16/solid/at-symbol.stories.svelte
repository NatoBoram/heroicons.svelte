<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import AtSymbolSvelte from '../../../lib/16/solid/at-symbol.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: AtSymbolSvelte,
		args: { class: '' },
	})
</script>

<Story name="AtSymbol" />
