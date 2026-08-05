<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import NoSymbolSvelte from '../../../lib/24/outline/no-symbol.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: NoSymbolSvelte,
		args: { class: '' },
	})
</script>

<Story name="NoSymbol" />
