<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { FingerPrint } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/FingerPrint" icon="heroicons:finger-print">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="FingerPrint" icon="heroicons:finger-print">
		<FingerPrint class={className} />
	</Hst.Variant>
</Hst.Story>
