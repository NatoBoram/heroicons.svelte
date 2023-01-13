<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Identification } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/Identification" icon="heroicons:identification">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Identification" icon="heroicons:identification">
		<Identification class={className} />
	</Hst.Variant>
</Hst.Story>
