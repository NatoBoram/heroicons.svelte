<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Banknotes } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/Banknotes" icon="heroicons:banknotes">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Banknotes" icon="heroicons:banknotes">
		<Banknotes class={className} />
	</Hst.Variant>
</Hst.Story>
