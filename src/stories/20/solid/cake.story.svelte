<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte'
	import { Cake } from '../../../lib/20/solid'

	export let Hst: Hst
	let className = 'w-5 h-5'
</script>

<Hst.Story title="Mini/Cake" icon="heroicons:cake">
	<svelte:fragment slot="controls">
		<Hst.Text bind:value={className} title="Class" />
	</svelte:fragment>

	<Hst.Variant title="Cake" icon="heroicons:cake">
		<Cake class={className} />
	</Hst.Variant>
</Hst.Story>
