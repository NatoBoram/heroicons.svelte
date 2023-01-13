<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Bars4 } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/Bars4" icon="heroicons:bars-4">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Bars4" icon="heroicons:bars-4">
		<Bars4 class={className} />
	</Hst.Variant>
</Hst.Story>
