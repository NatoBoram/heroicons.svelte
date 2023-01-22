<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { CommandLine } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/CommandLine" icon="heroicons:command-line">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="CommandLine" icon="heroicons:command-line">
		<CommandLine class={className} />
	</Hst.Variant>
</Hst.Story>
