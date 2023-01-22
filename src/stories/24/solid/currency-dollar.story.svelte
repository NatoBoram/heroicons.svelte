<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { CurrencyDollar } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/CurrencyDollar" icon="heroicons:currency-dollar">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="CurrencyDollar" icon="heroicons:currency-dollar">
		<CurrencyDollar class={className} />
	</Hst.Variant>
</Hst.Story>
