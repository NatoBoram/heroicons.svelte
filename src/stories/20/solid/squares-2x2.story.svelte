<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Squares2x2 } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/Squares2x2" icon="heroicons:squares-2x2">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Squares2x2" icon="heroicons:squares-2x2">
		<Squares2x2 class={className} />
	</Hst.Variant>
</Hst.Story>
