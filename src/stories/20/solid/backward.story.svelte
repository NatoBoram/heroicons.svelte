<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Backward } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/Backward" icon="heroicons:backward">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Backward" icon="heroicons:backward">
		<Backward class={className} />
	</Hst.Variant>
</Hst.Story>
