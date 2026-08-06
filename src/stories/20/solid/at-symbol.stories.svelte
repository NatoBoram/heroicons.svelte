<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import AtSymbolSvelte from '../../../lib/20/solid/at-symbol.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: AtSymbolSvelte,
		args: { class: '' },
	})
</script>

<Story name="AtSymbol" />
