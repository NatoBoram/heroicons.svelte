<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { QrCode } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/QrCode" icon="heroicons:qr-code">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="QrCode" icon="heroicons:qr-code">
		<QrCode class={className} />
	</Hst.Variant>
</Hst.Story>
