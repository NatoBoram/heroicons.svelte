<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { PlusSmall } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/PlusSmall" icon="heroicons:plus-small">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="PlusSmall" icon="heroicons:plus-small">
		<PlusSmall class={className} />
	</Hst.Variant>
</Hst.Story>
