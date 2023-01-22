<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Calculator } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/Calculator" icon="heroicons:calculator">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Calculator" icon="heroicons:calculator">
		<Calculator class={className} />
	</Hst.Variant>
</Hst.Story>
