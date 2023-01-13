<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { CurrencyYen } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/CurrencyYen" icon="heroicons:currency-yen">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="CurrencyYen" icon="heroicons:currency-yen">
		<CurrencyYen class={className} />
	</Hst.Variant>
</Hst.Story>
