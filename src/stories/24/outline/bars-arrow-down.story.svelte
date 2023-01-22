<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { BarsArrowDown } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/BarsArrowDown" icon="heroicons:bars-arrow-down">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="BarsArrowDown" icon="heroicons:bars-arrow-down">
		<BarsArrowDown class={className} />
	</Hst.Variant>
</Hst.Story>
