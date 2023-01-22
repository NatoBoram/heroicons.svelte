<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ArrowDownTray } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/ArrowDownTray" icon="heroicons:arrow-down-tray">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ArrowDownTray" icon="heroicons:arrow-down-tray">
		<ArrowDownTray class={className} />
	</Hst.Variant>
</Hst.Story>
