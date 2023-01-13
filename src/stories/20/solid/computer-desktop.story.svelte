<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ComputerDesktop } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/ComputerDesktop" icon="heroicons:computer-desktop">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ComputerDesktop" icon="heroicons:computer-desktop">
		<ComputerDesktop class={className} />
	</Hst.Variant>
</Hst.Story>
