<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { ArrowUpRight } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/ArrowUpRight" icon="heroicons:arrow-up-right">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="ArrowUpRight" icon="heroicons:arrow-up-right">
		<ArrowUpRight class={className} />
	</Hst.Variant>
</Hst.Story>
