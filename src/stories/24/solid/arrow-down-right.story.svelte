<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ArrowDownRight } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/ArrowDownRight" icon="heroicons:arrow-down-right">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ArrowDownRight" icon="heroicons:arrow-down-right">
		<ArrowDownRight class={className} />
	</Hst.Variant>
</Hst.Story>
