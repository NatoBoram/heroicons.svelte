<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import AtSymbolSvelte from '../../../lib/16/solid/at-symbol.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: AtSymbolSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="AtSymbol" />
