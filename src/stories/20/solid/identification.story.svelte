<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Identification } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/Identification" icon="heroicons:identification">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Identification" icon="heroicons:identification">
		<Identification class={className} />
	</Hst.Variant>
</Hst.Story>
