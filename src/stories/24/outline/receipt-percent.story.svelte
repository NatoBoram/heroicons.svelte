<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ReceiptPercent } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/ReceiptPercent" icon="heroicons:receipt-percent">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ReceiptPercent" icon="heroicons:receipt-percent">
		<ReceiptPercent class={className} />
	</Hst.Variant>
</Hst.Story>
