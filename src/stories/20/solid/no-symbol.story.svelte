<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { NoSymbol } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/NoSymbol" icon="heroicons:no-symbol">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="NoSymbol" icon="heroicons:no-symbol">
		<NoSymbol class={className} />
	</Hst.Variant>
</Hst.Story>
