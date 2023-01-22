<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Banknotes } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/Banknotes" icon="heroicons:banknotes">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Banknotes" icon="heroicons:banknotes">
		<Banknotes class={className} />
	</Hst.Variant>
</Hst.Story>
