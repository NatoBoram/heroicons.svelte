<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { MagnifyingGlassMinus } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/MagnifyingGlassMinus" icon="heroicons:magnifying-glass-minus">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="MagnifyingGlassMinus" icon="heroicons:magnifying-glass-minus">
		<MagnifyingGlassMinus class={className} />
	</Hst.Variant>
</Hst.Story>
