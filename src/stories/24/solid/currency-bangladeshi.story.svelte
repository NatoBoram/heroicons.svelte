<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { CurrencyBangladeshi } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/CurrencyBangladeshi" icon="heroicons:currency-bangladeshi">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="CurrencyBangladeshi" icon="heroicons:currency-bangladeshi">
		<CurrencyBangladeshi class={className} />
	</Hst.Variant>
</Hst.Story>
