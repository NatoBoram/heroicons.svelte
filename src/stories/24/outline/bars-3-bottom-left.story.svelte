<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Bars3BottomLeft } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/Bars3BottomLeft" icon="heroicons:bars-3-bottom-left">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Bars3BottomLeft" icon="heroicons:bars-3-bottom-left">
		<Bars3BottomLeft class={className} />
	</Hst.Variant>
</Hst.Story>
