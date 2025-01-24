<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import AtSymbolSvelte from '../../../lib/20/solid/at-symbol.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: AtSymbolSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="AtSymbol" />
