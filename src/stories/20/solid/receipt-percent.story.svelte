<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ReceiptPercent } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/ReceiptPercent" icon="heroicons:receipt-percent">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ReceiptPercent" icon="heroicons:receipt-percent">
		<ReceiptPercent class={className} />
	</Hst.Variant>
</Hst.Story>
