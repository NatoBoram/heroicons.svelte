<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { CurrencyEuro } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/CurrencyEuro" icon="heroicons:currency-euro">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="CurrencyEuro" icon="heroicons:currency-euro">
		<CurrencyEuro class={className} />
	</Hst.Variant>
</Hst.Story>
