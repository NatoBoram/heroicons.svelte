<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Bars3BottomLeft } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/Bars3BottomLeft" icon="heroicons:bars-3-bottom-left">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Bars3BottomLeft" icon="heroicons:bars-3-bottom-left">
		<Bars3BottomLeft class={className} />
	</Hst.Variant>
</Hst.Story>
