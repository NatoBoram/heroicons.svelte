<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import AtSymbolSvelte from '../../../lib/24/solid/at-symbol.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: AtSymbolSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="AtSymbol" />
