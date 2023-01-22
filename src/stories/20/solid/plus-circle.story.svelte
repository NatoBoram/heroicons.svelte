<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { PlusCircle } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/PlusCircle" icon="heroicons:plus-circle">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="PlusCircle" icon="heroicons:plus-circle">
		<PlusCircle class={className} />
	</Hst.Variant>
</Hst.Story>
