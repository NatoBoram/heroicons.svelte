<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Bars2 } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/Bars2" icon="heroicons:bars-2">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Bars2" icon="heroicons:bars-2">
		<Bars2 class={className} />
	</Hst.Variant>
</Hst.Story>
