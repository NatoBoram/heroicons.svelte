<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ArrowUpTray } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/ArrowUpTray" icon="heroicons:arrow-up-tray">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ArrowUpTray" icon="heroicons:arrow-up-tray">
		<ArrowUpTray class={className} />
	</Hst.Variant>
</Hst.Story>
