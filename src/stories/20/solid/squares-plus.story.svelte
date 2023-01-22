<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { SquaresPlus } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/SquaresPlus" icon="heroicons:squares-plus">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="SquaresPlus" icon="heroicons:squares-plus">
		<SquaresPlus class={className} />
	</Hst.Variant>
</Hst.Story>
