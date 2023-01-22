<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Bars3 } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/Bars3" icon="heroicons:bars-3">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Bars3" icon="heroicons:bars-3">
		<Bars3 class={className} />
	</Hst.Variant>
</Hst.Story>
