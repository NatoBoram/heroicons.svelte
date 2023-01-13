<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { PlusCircle } from '../../../lib/24/outline'

	export let Hst: Hst
	let className = 'w-6 h-6'
</script>

<Hst.Story title="Outline/PlusCircle" icon="heroicons:plus-circle">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="PlusCircle" icon="heroicons:plus-circle">
		<PlusCircle class={className} />
	</Hst.Variant>
</Hst.Story>
