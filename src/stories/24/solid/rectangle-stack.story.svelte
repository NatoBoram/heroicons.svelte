<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { RectangleStack } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/RectangleStack" icon="heroicons:rectangle-stack">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="RectangleStack" icon="heroicons:rectangle-stack">
		<RectangleStack class={className} />
	</Hst.Variant>
</Hst.Story>
