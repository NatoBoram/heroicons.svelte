<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { RectangleStack } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/RectangleStack" icon="heroicons:rectangle-stack">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="RectangleStack" icon="heroicons:rectangle-stack">
		<RectangleStack class={className} />
	</Hst.Variant>
</Hst.Story>
