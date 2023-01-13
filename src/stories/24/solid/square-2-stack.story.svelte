<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Square2Stack } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/Square2Stack" icon="heroicons:square-2-stack">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Square2Stack" icon="heroicons:square-2-stack">
		<Square2Stack class={className} />
	</Hst.Variant>
</Hst.Story>
