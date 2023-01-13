<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { AtSymbol } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/AtSymbol" icon="heroicons:at-symbol">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="AtSymbol" icon="heroicons:at-symbol">
		<AtSymbol class={className} />
	</Hst.Variant>
</Hst.Story>
