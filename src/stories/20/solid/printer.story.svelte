<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Printer } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/Printer" icon="heroicons:printer">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Printer" icon="heroicons:printer">
		<Printer class={className} />
	</Hst.Variant>
</Hst.Story>
