<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { CurrencyPound } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/CurrencyPound" icon="heroicons:currency-pound">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="CurrencyPound" icon="heroicons:currency-pound">
		<CurrencyPound class={className} />
	</Hst.Variant>
</Hst.Story>
