<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { RectangleGroup } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/RectangleGroup" icon="heroicons:rectangle-group">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="RectangleGroup" icon="heroicons:rectangle-group">
		<RectangleGroup class={className} />
	</Hst.Variant>
</Hst.Story>
