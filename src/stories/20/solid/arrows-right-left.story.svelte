<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ArrowsRightLeft } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/ArrowsRightLeft" icon="heroicons:arrows-right-left">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ArrowsRightLeft" icon="heroicons:arrows-right-left">
		<ArrowsRightLeft class={className} />
	</Hst.Variant>
</Hst.Story>
