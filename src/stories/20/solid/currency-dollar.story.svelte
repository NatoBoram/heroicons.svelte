<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { CurrencyDollar } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/CurrencyDollar" icon="heroicons:currency-dollar">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="CurrencyDollar" icon="heroicons:currency-dollar">
		<CurrencyDollar class={className} />
	</Hst.Variant>
</Hst.Story>
