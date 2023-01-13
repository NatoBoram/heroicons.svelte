<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { CommandLine } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/CommandLine" icon="heroicons:command-line">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="CommandLine" icon="heroicons:command-line">
		<CommandLine class={className} />
	</Hst.Variant>
</Hst.Story>
