<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Printer } from '../../../lib/24/solid'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Solid/Printer" icon="heroicons:printer">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Printer" icon="heroicons:printer">
		<Printer class={className} />
	</Hst.Variant>
</Hst.Story>
