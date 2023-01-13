<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ArrowUpTray } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/ArrowUpTray" icon="heroicons:arrow-up-tray">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ArrowUpTray" icon="heroicons:arrow-up-tray">
		<ArrowUpTray class={className} />
	</Hst.Variant>
</Hst.Story>
