<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { PlusSmall } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/PlusSmall" icon="heroicons:plus-small">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="PlusSmall" icon="heroicons:plus-small">
		<PlusSmall class={className} />
	</Hst.Variant>
</Hst.Story>
