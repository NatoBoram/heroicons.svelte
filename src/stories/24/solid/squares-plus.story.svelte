<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { SquaresPlus } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/SquaresPlus" icon="heroicons:squares-plus">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="SquaresPlus" icon="heroicons:squares-plus">
		<SquaresPlus class={className} />
	</Hst.Variant>
</Hst.Story>
