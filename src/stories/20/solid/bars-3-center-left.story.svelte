<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Bars3CenterLeft } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/Bars3CenterLeft" icon="heroicons:bars-3-center-left">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Bars3CenterLeft" icon="heroicons:bars-3-center-left">
		<Bars3CenterLeft class={className} />
	</Hst.Variant>
</Hst.Story>
