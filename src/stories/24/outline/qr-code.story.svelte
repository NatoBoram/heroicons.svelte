<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { QrCode } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/QrCode" icon="heroicons:qr-code">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="QrCode" icon="heroicons:qr-code">
		<QrCode class={className} />
	</Hst.Variant>
</Hst.Story>
