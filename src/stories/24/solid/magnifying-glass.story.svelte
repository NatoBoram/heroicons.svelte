<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { MagnifyingGlass } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/MagnifyingGlass" icon="heroicons:magnifying-glass">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="MagnifyingGlass" icon="heroicons:magnifying-glass">
		<MagnifyingGlass class={className} />
	</Hst.Variant>
</Hst.Story>
