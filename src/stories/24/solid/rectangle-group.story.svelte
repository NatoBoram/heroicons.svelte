<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { RectangleGroup } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/RectangleGroup" icon="heroicons:rectangle-group">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="RectangleGroup" icon="heroicons:rectangle-group">
		<RectangleGroup class={className} />
	</Hst.Variant>
</Hst.Story>
