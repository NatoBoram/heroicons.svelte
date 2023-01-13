<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { BarsArrowDown } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/BarsArrowDown" icon="heroicons:bars-arrow-down">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="BarsArrowDown" icon="heroicons:bars-arrow-down">
		<BarsArrowDown class={className} />
	</Hst.Variant>
</Hst.Story>
