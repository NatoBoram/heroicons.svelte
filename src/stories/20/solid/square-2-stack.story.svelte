<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Square2Stack } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/Square2Stack" icon="heroicons:square-2-stack">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Square2Stack" icon="heroicons:square-2-stack">
		<Square2Stack class={className} />
	</Hst.Variant>
</Hst.Story>
