<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Variable } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/Variable" icon="heroicons:variable">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Variable" icon="heroicons:variable">
		<Variable class={className} />
	</Hst.Variant>
</Hst.Story>
