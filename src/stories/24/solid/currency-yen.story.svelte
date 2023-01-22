<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { CurrencyYen } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/CurrencyYen" icon="heroicons:currency-yen">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="CurrencyYen" icon="heroicons:currency-yen">
		<CurrencyYen class={className} />
	</Hst.Variant>
</Hst.Story>
