<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Bars3BottomRight } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/Bars3BottomRight" icon="heroicons:bars-3-bottom-right">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Bars3BottomRight" icon="heroicons:bars-3-bottom-right">
		<Bars3BottomRight class={className} />
	</Hst.Variant>
</Hst.Story>
