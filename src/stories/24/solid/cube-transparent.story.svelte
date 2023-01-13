<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { CubeTransparent } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/CubeTransparent" icon="heroicons:cube-transparent">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="CubeTransparent" icon="heroicons:cube-transparent">
		<CubeTransparent class={className} />
	</Hst.Variant>
</Hst.Story>
