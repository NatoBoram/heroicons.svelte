<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ReceiptRefund } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/ReceiptRefund" icon="heroicons:receipt-refund">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ReceiptRefund" icon="heroicons:receipt-refund">
		<ReceiptRefund class={className} />
	</Hst.Variant>
</Hst.Story>
