<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Square3Stack3d } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/Square3Stack3d" icon="heroicons:square-3-stack-3d">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Square3Stack3d" icon="heroicons:square-3-stack-3d">
		<Square3Stack3d class={className} />
	</Hst.Variant>
</Hst.Story>
