<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { FingerPrint } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/FingerPrint" icon="heroicons:finger-print">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="FingerPrint" icon="heroicons:finger-print">
		<FingerPrint class={className} />
	</Hst.Variant>
</Hst.Story>
