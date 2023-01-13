<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { CurrencyRupee } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/CurrencyRupee" icon="heroicons:currency-rupee">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="CurrencyRupee" icon="heroicons:currency-rupee">
		<CurrencyRupee class={className} />
	</Hst.Variant>
</Hst.Story>
